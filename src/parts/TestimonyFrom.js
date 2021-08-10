import React, { Component, useState } from 'react';

import Star from 'elements/Star';
import Button from 'elements/Button';
import { InputText, InputFile } from "elements/Form";
// import Date from 'elements/Form/InputDate';

export default function TesTestimonyFrom(props){
    const { data } = props;
    // const onClick = (item) => {
    //   console.log("data", item)
    // };
    //const [rating, setRating] = useState(0);
    return (
      
      
        <div className="card bordered" style={{padding: '60px 80px'}}>
            <div className="row align-items-center">
                    <div className="col"></div>
                    <div className="col-auto text-center">
                    <Star value={data.rate} width={39} height={35} spacing={7} cursor= "pointer" handleclik={(item)=> props.onChangeRating(item)}></Star>
                    </div>
                    <div className="col"></div>
            </div>
            {/* <label htmlFor="rate">Rate</label>
            <InputText
                id="rate"
                name="rate"
                value={data.rate}
                onChange={props.onChange}
              /> */}
            <label htmlFor="photo">Tambah Photo</label>
            <InputFile
                accept="image/*"
                id="photo"
                name="photo"
                value={data.photo}
                onChange={props.onChange}
              />
            <label htmlFor="judul">Judul Testimoni</label>
            <InputText
                id="judul"
                name="judul"
                value={data.judul}
                onChange={props.onChange}
              />
            <label htmlFor="konten">Konten Testimoni</label>
            <InputText
                id="konten"
                name="konten"
                value={data.konten}
                onChange={props.onChange}
              />
            <label htmlFor="nama">Nama Testimoni</label>
            <InputText
                id="nama"
                name="nama"
                value={data.nama}
                onChange={props.onChange}
              />
            <label htmlFor="pekerja">Pekerjaan Testimoni</label>
            <InputText
                id="pekerja"
                name="pekerja"
                type="text"
                value={data.pekerja}
                onChange={props.onChange}
              />
              
            {/* <Button
                            className="btn px-5"
                            style={{ marginTop: 40}}
                            hasShadow
                            isPrimary
                            type="link"
                            href="/example"
                        >
                            Simpan Testimoni
                        </Button>           */}
        </div>
        
    
        
    )
}