package com.sistema.informacion.backend.controller;

import com.sistema.informacion.backend.model.Consultorio;
import com.sistema.informacion.backend.model.Persona;
import com.sistema.informacion.backend.repository.ConsultorioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/consultorios")
public class ConsultorioController {

    @Autowired
    private ConsultorioRepository repositorio;

    @GetMapping("/consultorio")
    public List<Consultorio> listAllConsultorio(){
        return repositorio.findAll();
    }

    @PostMapping("/personas")
    public Consultorio savedConsultorio(@RequestBody Consultorio consultorio){
        return repositorio.save(consultorio);
    }

}
