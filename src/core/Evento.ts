export default class Evento {
    id: number | null;
    nome: string;
    data: string;
    descricao: string;
    status: string;

    constructor(id: number | null,
        nome: string,
        data: string,
        descricao: string, 
        status: string) {
            this.id = id;
            this.nome = nome;
            this.data = data;
            this.descricao = descricao;
            this.status = status;
        }

        static gerarMocks() {
            return [
                new Evento(1, 
                    "UPF em Dança", 
                    "10/10/2024", 
                    "Melhor evento de Passo Fundo",
                    "ABERTO"),
                    new Evento(2, 
                        "UPF em Dança 2", 
                        "10/11/2024", 
                        "Melhor evento de Passo Fundo 2",
                        "ABERTO"),
                        new Evento(3, 
                            "UPF em Dança 3", 
                            "10/11/2024", 
                            "Melhor evento de Passo Fundo 3",
                            "ABERTO")
            ]
        }

}