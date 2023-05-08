package com.api.parkingcontrol.repositories;

import com.api.parkingcontrol.models.ClienteModel;
import com.api.parkingcontrol.models.Veiculo;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;

@DataJpaTest
@ActiveProfiles("test")
class ClienteRepositoryTest {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private TestEntityManager em;

    @Test
    @DisplayName("Deve devolver null quando não houver cliente com ID selecionado")
    void findByIdWhenNotExists() {
        var verificaCliente = clienteRepository.findById(11561656L);
        Assertions.assertThat(verificaCliente).isEmpty();
    }

    @Test
    @DisplayName("Deve devolver cliente quando encontrar o ID")
    void findByIdWhenExists() {
        cadastrarCliente("Alicia001", "alicia@alicia", "41998855", "02256388455", new Veiculo("ABC","TIIDA"));
        var verificaCliente = clienteRepository.findByNome("Alicia001");
        Assertions.assertThat(verificaCliente.get().getNome()).isEqualTo("Alicia001");
    }


    private ClienteModel cadastrarCliente(String nome, String email, String telefone, String cpf, Veiculo veiculo){
        var cliente = new ClienteModel(nome, email, telefone, cpf, new Veiculo("ABC","TIIDA"));
        System.out.println("Persistencia do cliente " + cliente);
        em.persist(cliente);
        return cliente;
    }

}