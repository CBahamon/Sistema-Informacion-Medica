package com.sistema.informacion.backend.controller;

import com.sistema.informacion.backend.model.Paciente;
import com.sistema.informacion.backend.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class PacienteControler {

    @Autowired
    private PacienteRepository repositorio;

    @GetMapping("/pacientes")
    public List<Paciente> listAllPacientes(){
        return repositorio.findAll();
    }

}
