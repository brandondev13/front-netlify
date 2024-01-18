import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    const handleSave = async () => {
        if (!name || !description || !price || !selectedFile) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("file", selectedFile);
            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", parseFloat(price));

            const response = await fetch("http://localhost:8080/api/products/save", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setName("");
                setDescription("");
                setPrice("");
                setSelectedFile(null);

                navigate("/");
            } else {
                console.error("Error al guardar el producto");
            }
        } catch (error) {
            console.error("Error", error);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div>
            <h2>Añadir Producto</h2>
            <label>
                Nombre:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Descripción:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Precio:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <label>
                Imagen:
                <input type="file" onChange={handleFileChange} />
            </label>
            <button onClick={handleSave}>Guardar</button>
        </div>
    );
};

export default AddProduct;
