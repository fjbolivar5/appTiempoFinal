import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConstants {
    public URL_PROVINCIAS = "http://localhost:5000/provincias/";
    public URL_MUNICIPIOS = "http://localhost:5000/municipios/";
    public URL_TIEMPOPROVINCIA = "http://localhost:5000/tiempoprovincia/";
    public URL_TIEMPOMUNICIPIO = "http://localhost:5000/tiempomunicipio/";
    public URL_TIEMPOPROVINCIASFECHA = "http://localhost:5000/tiempoprovinciaFecha/";
    public URL_TIEMPOMUNICIPIOFECHA = "http://localhost:5000/tiempomunicipioFecha/";
}