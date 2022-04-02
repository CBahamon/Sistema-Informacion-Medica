package com.sistema.informacion.backend.controller;

import com.sistema.informacion.backend.exceptions.ResourceNotFoundException;
import com.sistema.informacion.backend.model.Persona;
import com.sistema.informacion.backend.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    //search persona by id
    @GetMapping("/personas/{id}")
    public ResponseEntity<Persona> getPersonaById(@PathVariable Long id){
        Persona persona = repositorio.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe la persona con el documento : " + id));
        return ResponseEntity.ok(persona);
    }

    @PutMapping("/personas/${id}")
    public ResponseEntity<Persona> updatePersona(@PathVariable Long id, @RequestBody Persona detailPersona){
        Persona persona = repositorio.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe la persona con el documento : " + id));

        persona.setId_persona(detailPersona.getId_persona());
        persona.setNombre_persona(detailPersona.getNombre_persona());
        persona.setApellido_persona(detailPersona.getApellido_persona());
        persona.setTelefono_persona(detailPersona.getTelefono_persona());
        persona.setCorreo_persona(detailPersona.getCorreo_persona());
        persona.setDireccion_persona(detailPersona.getDireccion_persona());
        persona.setRol_persona(detailPersona.getRol_persona());

        Persona personaUpdate = repositorio.save(persona);
        return ResponseEntity.ok(personaUpdate);
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
