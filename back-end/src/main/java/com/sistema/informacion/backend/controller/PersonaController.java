package com.sistema.informacion.backend.controller;

import com.sistema.informacion.backend.model.Persona;
import com.sistema.informacion.backend.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonaController {

    @Autowired
    private PersonaRepository repositorio;

    @GetMapping("/personas")
    public List<Persona> listAllPersonas(){
        return repositorio.findAll();
    }

}
