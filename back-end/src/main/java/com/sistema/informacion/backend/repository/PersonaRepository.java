package com.sistema.informacion.backend.repository;

import com.sistema.informacion.backend.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long> {

//    @Query(
//            value = "SELECT * FROM sistema_informacion.persona WHERE rol_persona = 3",
//            nativeQuery = true
//    )
//    List<Persona> searchNativo(int rol);
}
