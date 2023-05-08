package com.api.parkingcontrol.models;

import com.api.parkingcontrol.dtos.ClienteDto;
import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "Clientes")
public class ClienteModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;
    private String email;
    private String telefone;
    private String cpf;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name="veiculo")
    private Veiculo veiculo;

    public ClienteModel() {
    }

    public ClienteModel(String nome, String email, String telefone, String cpf, Veiculo veiculo) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cpf = cpf;
        this.veiculo = veiculo;
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getTelefone() {
        return telefone;
    }

    public Veiculo getVeiculo() {return veiculo;}

    public void setVeiculo(Veiculo veiculo) {this.veiculo = veiculo;}

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }


    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "ClienteModel{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", email='" + email + '\'' +
                ", telefone='" + telefone + '\'' +
                ", cpf='" + cpf + '\'' +
                ", veiculo=" + veiculo +
                '}';
    }
}
