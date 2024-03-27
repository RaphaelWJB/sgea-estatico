const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

const cors = require('cors');
// const { equal } = require('assert');
app.use(cors());

app.use(express.json());

//String de acesso ao scheme cadastros no banco de dados wsoauth299!
mongoose.connect('mongodb+srv://viana:855689899@wsoauth299.xncbuju.mongodb.net/cadastros')
   
///////////////////////////////////////////////////// - CRUD FORNECEDOR - /////////////////////////////////////////////////////////////////////////////////////////
   
const Fornecedor = mongoose.model('fornecedor',{
        'nome': String,
        'cpf': String,
        'data_de_nascimento': String,
        'telefone':String,
        'email': String,
        'endereco': String,
        'bairro': String,
        'cidade': String,
        'estado': String,
        'acesso': String,
        'situacao': String
    });
    

    app.post('/', async (req, res) => {
        try {
            const fornecedor = new Fornecedor({
                nome: req.body.nome,
                cpf: req.body.cpf,
                data_de_nascimento: req.body.data_de_nascimento,
                telefone: req.body.telefone,
                email: req.body.email,
                endereco: req.body.endereco,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado,
                acesso: req.body.acesso,
                situacao: req.body.situacao
    
            });
                await fornecedor.save();
                res.send(fornecedor);
                console.log("dados inseridos:", fornecedor)
        } catch ( error ) {
            console.log('Erro ao criar fornecedor!', error);
            res.status(500).json({error: 'Erro ao criar Fornecedor'});
        }
    });
    
    
    app.get('/', async (req, res) => {
         try {
            const fornecedor = await Fornecedor.find();
            res.send(fornecedor);
            console.log('Fornecedores encontrado:', fornecedor);
                
         } catch (error) {
            console.log ('Erro ao buscar fornecedores!', error);
            res.status(500).json({error:'Error ao buscar fornecedores'})
         }
    });
    
 
    app.put('/:id', async(req, res) => {
        try {
            const fornecedor =  await Fornecedor.findByIdAndUpdate(req.params.id,{
                nome: req.body.nome,
                cpf: req.body.cpf,
                data_de_nascimento: req.body.data_de_nascimento,
                telefone: req.body.telefone,
                email: req.body.email,
                endereco: req.body.endereco,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado,
                acesso: req.body.acesso,
                situacao: req.body.situacao
    
            },{new : true});
            res.send(fornecedor);
            
        } catch (error) {
            console.log('Erro ao atualizar fornecedor', error);
            res.status(500).json({error: 'Error ao atualizar fornecedor!'});
        }
    
    })
    
   
    app.delete('/:id', async(req, res) => {
        try {
            const fornecedor = await Fornecedor.findByIdAndDelete(req.params.id);
            res.send(fornecedor);
           
            
        } catch (error) {
            console.log('Erro ao deletar fornecedor!', error);
            res.status(500).json(error = 'Erro ao deletar fornecedor!');
        }
    });


///////////////////////////////////////////////////// - CRUD COLABORADOR - /////////////////////////////////////////////////////////////////////////////////////////
   


    //String de acesso ao scheme cadastros no banco de dados wsoauth299!
    mongoose.connect('mongodb+srv://viana:855689899@wsoauth299.xncbuju.mongodb.net/cadastros');

    const Colaborador = mongoose.model('colaborador', {
        'nome': String,
        'cpf': String,
        'data_de_nascimento': String,
        'telefone':String,
        'email': String,
        'endereco': String,
        'bairro': String,
        'cidade': String,
        'estado': String,
        'acesso': String,
        'situacao': String
    });

    
    app.post('/colaborador', async (req, res) => {
        try {
            const colaborador = new Colaborador({
                nome: req.body.nome,
                cpf: req.body.cpf,
                data_de_nascimento: req.body.data_de_nascimento,
                telefone: req.body.telefone,
                email: req.body.email,
                endereco: req.body.endereco,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado,
                acesso: req.body.acesso,
                situacao: req.body.situacao
                })
                await colaborador.save()
                res.send(colaborador);
                console.log('Colaborador adicionado com sucesso!', colaborador);
            
        } catch (error) {
            
            console.log('Erro ao adicionar o colaborador!');
            res.status(500).json(error, "Erro ao adicionar o coalborador!");


        }
    })

    app.get('/colaborador', async(req, res) =>{
        try {
            const colaborador = await Colaborador.find();
            res.send(colaborador);
            console.log('Busca realizada com sucesso!')
       
        } catch (error) {
            
            console.log('Erro ao efetuar buscas na tabela de colaborador!')
            res.status(500).json(error, 'Erro ao efetuar buscar na tabela de colaborador!')

        }
    })

    app.delete('/colaborador/:id', async (req, res) => {
        try {
            const colaborador = await Colaborador.findByIdAndDelete(req.params.id);
        res.send(colaborador);
        console.log('Colaborador deletado!')
        } catch (error) {
            console.log('Erro ao deletar colaborador!', error);
            res.status(500).json(error,'Erro ao deletar colaborador!');
            
        }
    })

    app.put('/colaborador/:id', async(req, res) => {
        try {
            const colaborador = await Colaborador.findByIdAndUpdate(req.params.id,{
                nome: req.body.nome,
                cpf: req.body.cpf,
                data_de_nascimento: req.body.data_de_nascimento,
                telefone: req.body.telefone,
                email: req.body.email,
                endereco: req.body.endereco,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado,
                acesso: req.body.acesso,
                situacao: req.body.situacao
            }, {new: true});

            res.send(colaborador);
            console.log('Colaborador atualizado!')
        } catch (error) {
            
            console.log('Erro ao atualizar o colaborador!', error);
            res.status(500).json(error,'Erro ao atualizador o colaborador!')

        }

    })
    

    ///////////////////////////////////////////////////// - CRUD CLIENTE - /////////////////////////////////////////////////////////////////////////////////////////
    mongoose.connect('mongodb+srv://viana:855689899@wsoauth299.xncbuju.mongodb.net/cadastros');
    const Cliente = mongoose.model('cliente', {

        'nome': String,
        'cpf': String,
        'data_de_nascimento': String,
        'telefone':String,
        'email': String,
        'bairro': String,
        'cidade': String,
        'estado': String,
        'endereco': String,
        'numero': String,
        'complemento': String,
        'situacao': String
    });


         app.post('/cliente', async (req, res) => {

        try {
            const cliente = new Cliente({
            nome: req.body.nome,
            cpf: req.body.cpf,
            data_de_nascimento: req.body.data_de_nascimento,
            telefone: req.body.telefone,
            email: req.body.email,
            endereco: req.body.endereco,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            numero: req.body.numero,
            complemento: req.body.complemento,
            situacao : req.body.situacao            
           })

           await cliente.save();
           res.send(cliente);
           console.log("Cliente cadastrado!")

        } catch (error) {
            console.log("Erro ao cadastrar cliente!")
            res.status(500).json(error, 'Erro ao cadastrar cliente!')
        }

         })
        
         app.get('/cliente', async(req,res) => {
        try {
         const cliente = await Cliente.find();
         res.send(cliente);
         console.log("Busca realizada com sucesso!")
             
         } catch (error) {
 
             console.log('Erro ao buscar cliente!', error);
             res.status(500).json(error,'Erro ao buscar cliente!');
             
         }         
         });

         app.put('/cliente/:id', async (req, res) => {
            try {

                const cliente = await Cliente.findByIdAndUpdate(req.params.id,{

                nome: req.body.nome,
                cpf: req.body.cpf,
                data_de_nascimento: req.body.data_de_nascimento,
                telefone: req.body.telefone,
                email: req.body.email,
                endereco: req.body.endereco,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado,
                numero: req.body.numero,
                complemento: req.body.complemento,
                situacao : req.body.situacao 

                }, {new: true});
                    res.send(cliente);
                    console.log('Cliente atualizado com sucesso!');
                } catch (error) {
                    console.log('Erro ao atualizar cliente!',error);
                    res.status(500).json(error, 'Erro ao atualizar cliente!');
            }
         })

         app.delete('/cliente/:id', async (req, res) => {
            try {
                const cliente = await Cliente.findByIdAndDelete(req.params.id);
                res.send(cliente);
                console.log('Cliente deletado com sucesso!')
                  
            } catch (error) {
                
                console.log('Erro ao deletar cliente!', error);
                res.status(500).json(error,'Erro ao deletar cliente!');
            }
         })

    ///////////////////////////////////////////////////// - CRUD PRODUTO - /////////////////////////////////////////////////////////////////////////////////////////
    mongoose.connect('mongodb+srv://viana:855689899@wsoauth299.xncbuju.mongodb.net/cadastros');
    const Produto = mongoose.model('Produto', {
        'nome_do_produto': String,
        'marca_do_produto': String,
        'descricao_do_produto': String,
        'qtde_produto': Number,
        'qtde_para_alerta' : Number,
        'tipo': String,
        'categoria': String,
        'data_de_vencimento': String,
        'fornecedor': String,
        'valor_de_compra': Number,
        'valor_de_venda': Number

    });

    app.post('/produto', async(req,res) => {
        try {
                const produto = new Produto({

                    nome_do_produto: req.body.nome_do_produto,
                    marca_do_produto: req.body.marca_do_produto,
                    descricao_do_produto: req.body.descricao_do_produto,
                    qtde_produto: req.body.qtde_produto,
                    qtde_para_alerta: req.body.qtde_para_Alerta,
                    tipo: req.body.tipo,
                    categoria: req.body.categoria,
                    data_de_vencimento: req.body.data_de_vencimento,
                    fornecedor: req.body.fornecedor,
                    valor_de_compra: req.body.valor_de_compra,
                    valor_de_venda: req.body.valor_de_venda
                    });

                        await produto.save();
                        res.send(produto);
                        console.log('Produto cadastrado!')
                    } catch (error) {
                        console.log('Erro ao cadastrar produto!', error);
                        res.send(error, 'Erro ao cadastrar produto!');
                    }
                })
                    
    app.get('/produto', async (req, res) => {
        try {

            const produto = await Produto.find();
            res.send(produto);
            console.log('Produtos encontrados:', this.produto);
            
        } catch (error) {
            console.log('Erro ao buscar produtos:', error);

        }
    })

    app.put('/produto/:id', async (req, res) =>{
        try {

            const fatura = await Produto.findByIdAndUpdate(req.params.id,{
                
                nome_do_produto: req.body.nome_do_produto,
                marca_do_produto: req.body.marca_do_produto,
                descricao_do_produto: req.body.descricao_do_produto,
                qtde_produto: req.body.qtde_produto,
                qtde_para_alerta: req.body.qtde_para_Alerta,
                tipo: req.body.tipo,
                categoria: req.body.categoria,
                data_de_vencimento: req.body.data_de_vencimento,
                fornecedor: req.body.fornecedor,
                valor_de_compra: req.body.valor_de_compra,
                valor_de_venda: req.body.valor_de_venda
            },{new: true})
            res.send(fatura);
            console.log('Fatura atualizada com sucesso!');

            
        } catch (error) {
            console.log('Erro ao atualizar fatura!', error);
            res.status(500).json(error, 'Erro ao atualizar fatura!')
        }
    });

    app.delete('/produto/:id', async (req, res) => {
            try {
                const produto = await Produto.findByIdAndDelete(req.params.id);
                res.send(produto);
                console.log('Produto deletado!');

            } catch (error) {

                console.log('Erro ao deletar produto!', error);
                res.status(500).json(error, 'Erro ao deletar produto!');              
            }
    });





    ///////////////////////////////////////////////////// - CRUD FATURAS - /////////////////////////////////////////////////////////////////////////////////////////
    mongoose.connect('mongodb+srv://viana:855689899@wsoauth299.xncbuju.mongodb.net/cadastros');
    const Fatura = mongoose.model('fatura', {
        'empresa_devedora': String,
        'data_de_vencimento': String,
        'dias_para_alerta': Number,
        'descricao_da_fatura': String,
        'valor_da_fatura': Number

    });

    app.post('/fatura', async (req, res) => {

        try {
            const fatura = new Fatura({
                empresa_devedora: req.body.empresa_devedora,
                data_de_vencimento: req.body.data_de_vencimento,
                dias_para_alerta: req.body.dias_para_alerta,
                descricao_da_fatura: req.body.descricao_da_fatura,
                valor_da_fatura: req.body.valor_da_fatura
           })
            await fatura.save();
            res.send(fatura);
            console.log('Dados adicionado com sucesso!');            
        } catch (error) {
            console.log('Erro ao adicionar dados!', error);
            res.status(500).json(error, 'Erro ao adicionar fatura!')
        }

    });

    app.get('/fatura', async (req, res) => {
        try {
            const fatura = await Fatura.find();
            res.send(fatura);
            console.log('Busca realizada com sucesso!', fatura);

        } catch (error) {
            console.log('Erro ao buscar dados!', error);
            res.status(500).json(error,'Erro ao buscar dados!')
        }
    });

    app.put('/fatura/:id', async(req, res) => {
        try {
            const fatura = await Fatura.findByIdAndUpdate(req.params.id,{
                empresa_devedora: req.body.empresa_devedora,
                data_de_vencimento: req.body.data_de_vencimento,
                dias_para_alerta: req.body.dias_para_alerta,
                descricao_da_fatura: req.body.descricao_da_fatura,
                valor_da_fatura: req.body.valor_da_fatura
            }, {new: true})
            res.send(fatura);
            console.log('Fatura atualizada!')
        } catch (error) {
            console.log('Erro ao atualizar fatura!', error);
            res.status(error, 'Erro ao atualizar fatura!')            
        }
    })

    app.delete('/fatura/:id', async (req, res) => {
        try {
            
            const fatura = await Fatura.findByIdAndDelete(req.params.id);
            res.send(fatura);
            console.log('Fatura deletada com sucesso!');

        } catch (error) {
            console.log('Erro ao deletar fatura!', error);
            res.status(500).json(error,'Erro ao deletar fatura!');
        }
    });


    //Aqui o servidor vai ficar escutando a porta definida!
    app.listen(port, () => [
        console.log('O servidor está rodando na porta 4000!')
    ]);

