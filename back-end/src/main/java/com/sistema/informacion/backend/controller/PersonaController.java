package com.sistema.informacion.backend.controller;

import com.sistema.informacion.backend.exceptions.ResourceNotFoundException;
import com.sistema.informacion.backend.model.Persona;
import com.sistema.informacion.backend.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.PUT,RequestMethod.POST})
public class PersonaController {

    @Autowired
    private PersonaRepository repositorio;
//    private LoginRepository repo;

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

    //update persona
    @PutMapping("/personas/{id}")
    public ResponseEntity<Persona> updatePersona(@PathVariable Long id,@RequestBody Persona detailPersona){
        Persona persona = repositorio.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID : " + id));

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

    //delete persona
    @DeleteMapping("/pacientes/{id}")
    public ResponseEntity<Map<String,Boolean>> deletePersona(@PathVariable Long id){
        Persona persona = repositorio.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe la persona con el ID : " + id));

        repositorio.delete(persona);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminar",Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }

//    @PostMapping("/login")
//    public ResponseEntity<?> loginPersona(@RequestBody Persona personaData) {
//        Persona persona = repositorio.findByUserId(personaData.getId_persona());
//        if (persona.getPassword_persona().equals(personaData.getPassword_persona()))
//            return ResponseEntity.ok(persona);
//        return (ResponseEntity<?>) ResponseEntity.internalServerError();
//    }

    @PostMapping("/login")
    public ResponseEntity<?> loginPersona(@RequestBody Persona personaData){
        Persona persona = repositorio.findById(personaData.getId_persona())
                .orElseThrow(() -> new ResourceNotFoundException("No existe la persona con el documento : " + personaData.getId_persona()));

        if (persona.getPassword_persona().equals(personaData.getPassword_persona()))
            return ResponseEntity.ok(persona);
        return ResponseEntity.ok(persona);
    }

}
