package com.sistema.informacion.backend.controller;

import com.sistema.informacion.backend.model.Persona;
import com.sistema.informacion.backend.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonaController {

    @Autowired
    private PersonaRepository repositorio;

    //get all personas
    @GetMapping("/personas")
    public List<Persona> listAllPersonas(){
        return repositorio.findAll();
    }

    //save persona
    @PostMapping("/personas")
    public Persona savedPersona(@RequestBody Persona persona){
        return repositorio.save(persona);
    }

//    @GetMapping("/pacientes")
//    public List<Persona> listAllPacientes(@RequestParam int rol){
//        try {
//            return repositorio .
//        }catch (Exception e){
//
//        }
//        return repositorio.findByRol_persona(2L);
//    }

}
