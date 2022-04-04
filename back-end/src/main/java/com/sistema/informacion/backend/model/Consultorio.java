package com.sistema.informacion.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "consutorio")
public class Consultorio {

    @Id
    @Column(name ="id_consultorio", length = 10,nullable = false)
    private Long id_consultio;

    @Column(name ="nombre_consultorio", length = 45,nullable = false)
    private Long nombre_consultio;

    @Column(name ="direccion_consultorio", length = 45,nullable = false)
    private Long direccion_consultio;

    @Column(name ="id_departamento", length = 5,nullable = false)
    private Long id_departamento;

    @Column(name ="id_municipio", length = 5,nullable = false)
    private Long id_municipio;

    private Consultorio(){

    }

    public Consultorio(Long id_consultio, Long nombre_consultio, Long direccion_consultio, Long id_departamento, Long id_municipio) {
        super();
        this.id_consultio = id_consultio;
        this.nombre_consultio = nombre_consultio;
        this.direccion_consultio = direccion_consultio;
        this.id_departamento = id_departamento;
        this.id_municipio = id_municipio;
    }

    public Long getId_consultio() {
        return id_consultio;
    }

    public void setId_consultio(Long id_consultio) {
        this.id_consultio = id_consultio;
    }

    public Long getNombre_consultio() {
        return nombre_consultio;
    }

    public void setNombre_consultio(Long nombre_consultio) {
        this.nombre_consultio = nombre_consultio;
    }

    public Long getDireccion_consultio() {
        return direccion_consultio;
    }

    public void setDireccion_consultio(Long direccion_consultio) {
        this.direccion_consultio = direccion_consultio;
    }

    public Long getId_departamento() {
        return id_departamento;
    }

    public void setId_departamento(Long id_departamento) {
        this.id_departamento = id_departamento;
    }

    public Long getId_municipio() {
        return id_municipio;
    }

    public void setId_municipio(Long id_municipio) {
        this.id_municipio = id_municipio;
    }
}
