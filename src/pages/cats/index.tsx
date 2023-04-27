import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { CatApiRestService } from '../../services/CatApiRestSercice'


import 'primeicons/primeicons.css';
import Swal from 'sweetalert2';

const CatTable: React.FC = () => {
    const [cats, setCats] = useState<Cat[]>([]);
    const [selectedCat, setSelectedCat] = useState<Cat | null>(null);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [breed, setBreed] = useState('');
    const [displayEditDialog, setDisplayEditDialog] = useState(false);
    const [visible, setVisible] = useState(false);
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);
    const [newCat, setNewCat] = useState<NewCat>({
        name: "",
        age: 0,
        breed: "",
        photo: "",
    });
    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setVisible(false);
        try {
            const response = await CatApiRestService.createCatApi(newCat);
            console.log(response);
            const cats = await CatApiRestService.getCatApi();
            setCats(cats.data);
            Swal.fire({
                icon: 'success',
                text: 'Registro exitoso',
                timer: 3000,
                timerProgressBar: true
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewCat({ ...newCat, [name]: value });
    };


    const showDialog = () => {
        setVisible(true);
    };

    const hideDialog = () => {
        setVisible(false);
    };


    useEffect(() => {
        const getCats = async () => {
            try {
                const response = await CatApiRestService.getCatApi();
                setCats(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCats();
    }, []);


    const updateCat = (cat: Cat) => {
        CatApiRestService.updateCatApi(cat)
            .then(response => {
                console.log(response);
                setCats(cats.map(c => c._id === cat._id ? cat : c));
                Swal.fire({
                    icon: 'success',
                    text: 'Cambio realizado con exito',
                    timer: 3000,
                    timerProgressBar: true
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
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
        Swal.fire({
            title: '¿Está seguro?',
            text: `¿Está seguro de que desea eliminar el gato ${cat.name}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc4635',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Eliminar'
        }).then((result: any) => {
            if (result.isConfirmed) {
                CatApiRestService.deleteCatApi(cat)
                    .then(() => {
                        setCats(cats.filter(c => c._id !== cat._id));
                        Swal.fire({
                            icon: 'success',
                            // text: response.data.message,
                            text: "Gato eliminado",
                            timer: 2000,
                            timerProgressBar: true,
                            confirmButtonColor: "#de1b05"
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                        Swal.fire({
                            icon: 'error',
                            text: error,
                            timer: 3000,
                            timerProgressBar: true,
                            confirmButtonColor: "#de1b05"
                        });
                    });
            }
        });
    };
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
            <Button label="Crear" onClick={showDialog} severity='danger' />
            <Dialog
                header="Crear"
                visible={visible}
                onHide={hideDialog}
                modal
                className="p-fluid"
            >
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <label className="flex flex-col">
                        <span className="font-semibold">Nombre</span>
                        <input
                            type="text"
                            name="name"
                            value={newCat.name}
                            onChange={handleChange}
                            className="border-gray-400 border-2 px-4 py-2 rounded-lg focus:outline-none focus:border-red-600"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="font-semibold">Edad</span>
                        <input
                            type="number"
                            name="age"
                            value={newCat.age}
                            onChange={handleChange}
                            className="border-gray-400 border-2 px-4 py-2 rounded-lg focus:outline-none focus:border-red-600"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="font-semibold">Raza</span>
                        <input
                            type="text"
                            name="breed"
                            value={newCat.breed}
                            onChange={handleChange}
                            className="border-gray-400 border-2 px-4 py-2 rounded-lg focus:outline-none focus:border-red-600"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="font-semibold">Foto</span>
                        <input
                            type="text"
                            name="photo"
                            value={newCat.photo}
                            onChange={handleChange}
                            className="border-gray-400 border-2 px-4 py-2 rounded-lg focus:outline-none focus:border-red-600"
                        />
                    </label>
                    <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors duration-300 ease-in-out" onClick={() => handleSubmit}>Crear</button>
                </form>
            </Dialog>
            <Dialog header="Editar gato" visible={displayEditDialog} style={{ width: '400px' }} onHide={onHide}>
                {selectedCat && (
                    <>
                        <div className="p-d-flex p-jc-center">
                            <img src={selectedCat.photo} alt={selectedCat.name} style={{ width: '80px', height: '80px' }} />
                        </div>
                        <div className="p-4 flex flex-col">
                            <div className="p-field mb-4">
                                <label htmlFor="name">Nombre</label>
                                <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="p-field mb-4">
                                <label htmlFor="age">Edad</label>
                                <InputNumber id="age" value={age} onChange={(e) => setAge(e.value as number)} />
                            </div>
                            <div className="p-field mb-4">
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
                        </div>
                    </>
                )}
            </Dialog>
            <DataTable value={cats}>
                {/* <Column field="_id" header="ID"></Column> */}
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
            <div className="card">
                <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
            </div>
        </>
    );
};

export default CatTable;
