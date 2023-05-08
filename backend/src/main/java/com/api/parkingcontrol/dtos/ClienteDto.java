package com.api.parkingcontrol.dtos;

import com.api.parkingcontrol.models.ClienteModel;
import com.api.parkingcontrol.models.Veiculo;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.util.UUID;

public class ClienteDto  {

    @NotBlank
    private String nome;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String telefone;

    @NotBlank
    private String cpf;

    private Veiculo veiculo;

    public ClienteDto(String nome, String email, String telefone, String cpf, Veiculo veiculo) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cpf = cpf;
        this.veiculo = veiculo;
    }

    public ClienteDto() {
    }

    public ClienteModel transferCliente() {
        return new ClienteModel(this.getNome(),this.getEmail(),this.getTelefone(),this.getCpf(),this.getVeiculo());
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

    public String getCpf() {
        return cpf;
    }

    public Veiculo getVeiculo() {
        return veiculo;
    }
}
