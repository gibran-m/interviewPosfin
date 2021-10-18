import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



class FormPinjam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Barang: [],
            nama_peminjam: '',
            barang_dipinjam: '',
            hasNamaError: false,
            hasBarangError: false,
            isUpdate: false,
            id:{}
        };
    }

    getBarang () {
        axios
            .get('http://localhost:5000/barang')
            .then(res => {
                const data = res.data
                console.log(data)
                const barang = data.map((barang, index) => (
                    <tr key={barang.pinjamId}>
                        <td>{index + 1}</td>
                        <td>{barang.nama_peminjam}</td>
                        <td>{barang.barang_dipinjam}</td>
                        <td>
                            <Button onClick={() => this.changeUpdate(barang.pinjamId)} variant="info">Update</Button>
                            &nbsp;
                            <Button onClick={() => this.deleteBarang(barang.pinjamId)} variant="danger">Delete</Button> 
                        </td>
                    </tr>
                ))
                
                this.setState({
                    barang
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getBarang();
    }


    deleteBarang = async(id) =>{
        await axios.delete(`http://localhost:5000/barang/${id}`)
        this.getBarang(); 
    }

    getBarangById = async(id) =>{
        const response = await axios.get(`http://localhost:5000/barang/${id}`);
        console.log(response.data.nama_peminjam);
        this.setState({
            nama_peminjam: response.data.nama_peminjam,
            barang_dipinjam: response.data.barang_dipinjam,
            id:id
            });
    }

    changeUpdate = async(id) => {
        this.setState({isUpdate: true})
        this.getBarangById(id)
    }

    changeSubmit(){
        this.setState({isUpdate: false})
        this.setState({
            nama_peminjam: '',
            barang_dipinjam: '',
        })
    }
    
    handleNamaChange = event => {
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
        this.setState({
        nama_peminjam: inputValue,
        hasNamaError: isEmpty,
        });
    }

    handleBarangChange = event => {
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
        this.setState({
        barang_dipinjam: inputValue,
        hasBarangError: isEmpty,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        //window.location.reload(false);

        if ((!this.state.nama_peminjam=="") && (!this.state.barang_dipinjam=="") ){
            axios.post('http://localhost:5000/barang',{
            nama_peminjam: this.state.nama_peminjam,
            barang_dipinjam: this.state.barang_dipinjam
        });
        }
        
        
        this.getBarang() 
        this.getBarang()
    }

    handleUpdate = event => {
        event.preventDefault();
        //window.location.reload(false);

        if ((!this.state.nama_peminjam=="") && (!this.state.barang_dipinjam=="") ){
            axios.patch(`http://localhost:5000/barang/${this.state.id}`,{
            nama_peminjam: this.state.nama_peminjam,
            barang_dipinjam: this.state.barang_dipinjam
        });
        }
        
        
        this.getBarang() 
        this.getBarang()
    }


    

    render() {
        let namaErrorText;
        if (this.state.hasNamaError) {
            namaErrorText = (
            <Alert className='Alert' variant='danger'>
            Masukkan Nama
            </Alert>
            );
        }
        
        let barangErrorText;
        if (this.state.hasBarangError) {
            barangErrorText = (
            <Alert className='Alert' variant='danger'>
                Masukkan Barang
                </Alert>
            );
        }

        let form;
        if(this.state.isUpdate){
            form = (
                <Form onSubmit={ this.handleUpdate }>
                    <div className="namaPeminjam">
                        <input 
                            type ="text" 
                            name="nama_peminjam"
                            placeholder="Nama Peminjam"
                            value={this.state.nama_peminjam}
                            onChange={ this.handleNamaChange}
                        />
                        {namaErrorText}
                    </div>
                    <p></p>
                    <div className="namaBarang">
                        <input 
                            type ="text" 
                            name="barang_dipinjam"
                            placeholder="Nama Barang"
                            value={ this.state.barang_dipinjam }
                            onChange={ this.handleBarangChange }
                        />
                        {barangErrorText}
                    </div>
                    <p></p>
                    <Button type="submit" variant="primary">update</Button>&nbsp;&nbsp;
                    <Button onClick={() => this.changeSubmit()} variant="primary">back</Button>
                </Form>
            )
        }else{
            form = (
                <Form onSubmit={ this.handleSubmit }>
                    <div className="namaPeminjam">
                        <input 
                            type ="text" 
                            name="nama_peminjam"
                            placeholder="Nama Peminjam"
                            value={this.state.nama_peminjam}
                            onChange={ this.handleNamaChange}
                        />
                        {namaErrorText}
                    </div>
                    <p></p>
                    <div className="namaBarang">
                        <input 
                            type ="text" 
                            name="barang_dipinjam"
                            placeholder="Nama Barang"
                            value={ this.state.barang_dipinjam }
                            onChange={ this.handleBarangChange }
                        />
                        {barangErrorText}
                    </div>
                    <p></p>
                    <Button type="submit" variant="primary">submit</Button>
                </Form>
            )
        }

        return (
        <div className="col-md-10">
            <div className="col-md-4">
                {form}
            </div>
            
            
            <div  className="col-md-10">
                <br />
                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nama Peminjam</th>
                        <th>Barang yang Dipinjam</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.barang}
                    </tbody>
                </Table>
            </div>
        </div>
        )
    }
}

export default FormPinjam;