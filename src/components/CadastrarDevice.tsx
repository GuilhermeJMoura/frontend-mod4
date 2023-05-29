import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '../styles/cadastro_equipamentos.css'

export function CadastrarEquipamentos (){
    return(
        <div className='main-cadastro-device'>
            <div className='grid-container-cadastro'>
                <div className='grid-item-cadastro'>
                    <h1 className='cadastro-title'>Cadastro de Equipamentos</h1>
                </div>
                <div className='grid-item-cadastro'>
                    <div>
                        <input type="text" id="default-input" placeholder='Tablet' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                        dark:focus:border-blue-500"></input>
                    </div>
                </div>
                <div className='grid-item-cadastro'>
                    <div className="mb-6">
                        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modelo</label>
                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                        dark:focus:border-blue-500"></input>
                    </div>
                </div>
                <div className='grid-item-cadastro'>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
                    <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                    dark:focus:border-blue-500"></input>
                </div>
                </div>
                <div className='grid-item-cadastro'>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nota fiscal</label>
                    <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                    dark:focus:border-blue-500"></input>
                </div>
                </div>
                <div className='grid-item-cadastro'>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data da Compra</label>
                    <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                    dark:focus:border-blue-500"></input>
                </div>
                </div>
                <div className='grid-item-cadastro'>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Período de Leasing</label>
                    <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                    dark:focus:border-blue-500"></input>
                </div>
                </div>
                <div className='grid-item-cadastro'>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número do Rastrador</label>
                    <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                    dark:focus:border-blue-500"></input>
                </div>
                </div>
                <div className='grid-item-cadastro'>
                    <button className='cancel-button'>Cancelar</button>
                    <button className='cadastro-button'>Cadastrar</button>
                </div>
            </div>
        </div>
        
    )
}

//Teste