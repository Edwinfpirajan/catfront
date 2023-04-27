import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import axios from 'axios';

import 'primeicons/primeicons.css';

interface Cat {
    _id: string;
    name: string;
    age: number;
    breed: string;
    photo: string;
    __v: number;
}

const CatTable: React.FC = () => {
    const [cats, setCats] = useState<Cat[]>([]);
    const [selectedCat, setSelectedCat] = useState<Cat | null>(null);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [breed, setBreed] = useState('');
    const [displayEditDialog, setDisplayEditDialog] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/api/cat/find/all')
            .then(response => {
                setCats(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const updateCat = (cat: Cat) => {
        axios.put(`http://localhost:8080/api/cat/edit/${cat._id}`, cat)
            .then(response => {
                console.log(response.data);
                setCats(cats.map(c => c._id === cat._id ? cat : c));
            })
            .catch(error => {
                console.log(error);
            });
    }

    const editCat = (cat: Cat) => {
        setSelectedCat(cat);
        setName(cat.name);
        setAge(cat.age);
        setBreed(cat.breed);
        setDisplayEditDialog(true);
    }

    const onHide = () => {
        setSelectedCat(null);
        setName('');
        setAge(0);
        setBreed('');
        setDisplayEditDialog(false);
    }


    const deleteCat = (cat: Cat) => {
        axios.delete(`http://localhost:8080/api/cat/delete/${cat._id}`)
            .then(response => {
                console.log(response.data);
                setCats(cats.filter(c => c._id !== cat._id));
            })
            .catch(error => {
                console.log(error);
            });
    }

    const actionTemplate = (rowData: Cat) => {
        return (
            <div>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editCat(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => deleteCat(rowData)} />
            </div>
        );
    }

    return (
        <>
        <Dialog header="Editar gato" visible={displayEditDialog} style={{ width: '50vw' }} onHide={onHide}>
    {selectedCat && (
        <>
            <div className="p-field">
                <label htmlFor="name">Nombre</label>
                <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="p-field">
                <label htmlFor="age">Edad</label>
                <InputNumber id="age" value={age} onChange={(e) => setAge(e.value as number)} />
            </div>
            <div className="p-field">
                <label htmlFor="breed">Raza</label>
                <InputText id="breed" value={breed} onChange={(e) => setBreed(e.target.value)} />
            </div>
            <div className="p-d-flex p-jc-end">
                <Button label="Actualizar" className="p-button-success p-mr-2" onClick={() => {
                    updateCat({
                        ...selectedCat,
                        name,
                        age,
                        breed,
                    });
                    onHide();
                }} />
                <Button label="Cancelar" className="p-button-secondary" onClick={onHide} />
            </div>
        </>
    )}
</Dialog>
        <DataTable value={cats}>
            <Column field="_id" header="ID"></Column>
            <Column header="Foto" body={(rowData: Cat) => <img
                src={rowData.photo}
                alt={`Foto de ${rowData.name}`}
                style={{ width: '80px', height: '80px' }}
            />} />
            <Column field="name" header="Nombre"></Column>
            <Column field="age" header="Edad"></Column>
            <Column field="breed" header="Raza"></Column>
            <Column header="Acciones" body={actionTemplate} />
        </DataTable>
        </>
    );
};

export default CatTable;