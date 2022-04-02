package com.sistema.informacion.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "persona")
public class Persona {

//    @Id
//    @
//    GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name ="id_persona", length = 40,nullable = false)
    private Long id_persona;

    @Column(name = "nombre_persona", length = 40 ,nullable = false)
    private String nombre_persona;

    @Column(name = "apellido_persona", length = 40 ,nullable = false)
    private String apellido_persona;

    @Column(name = "telefono_persona", length = 40 ,nullable = false)
    private String telefono_persona;

    @Column(name = "correo_persona", length = 40 ,nullable = false)
    private String correo_persona;

    @Column(name = "direccion_persona", length = 40 ,nullable = false)
    private String direccion_persona;

    @Column(name = "rol_persona", length = 40 ,nullable = false)
    private int rol_persona;

    private Persona(){

    }

    public Persona(Long id_persona, String nombre_persona, String apellido_persona, String telefono_persona, String correo_persona, String direccion_persona, int rol_persona) {
        super();
        this.id_persona = id_persona;
        this.nombre_persona = nombre_persona;
        this.apellido_persona = apellido_persona;
        this.telefono_persona = telefono_persona;
        this.correo_persona = correo_persona;
        this.direccion_persona = direccion_persona;
        this.rol_persona = rol_persona;
    }

    public Long getId_persona() {
        return id_persona;
    }

    public void setId_persona(Long id_persona) {
        this.id_persona = id_persona;
    }

    public String getNombre_persona() {
        return nombre_persona;
    }

    public void setNombre_persona(String nombre_persona) {
        this.nombre_persona = nombre_persona;
    }

    public String getApellido_persona() {
        return apellido_persona;
    }

    public void setApellido_persona(String apellido_persona) {
        this.apellido_persona = apellido_persona;
    }

    public String getTelefono_persona() {
        return telefono_persona;
    }

    public void setTelefono_persona(String telefono_persona) {
        this.telefono_persona = telefono_persona;
    }

    public String getCorreo_persona() {
        return correo_persona;
    }

    public void setCorreo_persona(String correo_persona) {
        this.correo_persona = correo_persona;
    }

    public String getDireccion_persona() {
        return direccion_persona;
    }

    public void setDireccion_persona(String direccion_persona) {
        this.direccion_persona = direccion_persona;
    }

    public int getRol_persona() {
        return rol_persona;
    }

    public void setRol_persona(int rol_persona) {
        this.rol_persona = rol_persona;
    }

}
