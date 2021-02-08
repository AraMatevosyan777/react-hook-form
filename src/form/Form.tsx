import React from 'react'
import Field from './Field'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CoverImageField from './ImageFiled';

const Form = () => {
    let schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
        pageTitle: yup.string(),
        url: yup.string(),
        openGraphTitle: yup.string(),
        openGraphDescription: yup.string(),
        keywords: yup.string(),
        coverImage: yup.mixed().required()
        .test("type", "We only support jpeg", (value) => {
            return value && value[0].type === "image/png";
          }),
    })

    const { register, handleSubmit, errors } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema),
    })

    const onSubmit = (data: any) => {
        Object.keys(data).map(el => {
            if(el !== 'coverImage'){
                console.log(el, data[el] || 'empty');
            }else{
                console.log(el, URL.createObjectURL(data[el][0]))
            }
        })
    }   

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='main'>
                <h2>Main Info</h2>
                <Field name='title' register={register} errors={errors}/>
                <Field name='description' register={register} errors={errors}/>
                <Field name='pageTitle' register={register}/>
                <Field name='url' register={register}/>
            </div>
            <div className='seo'>
                <h2>SEO Info</h2>
                <div className="seoInner">
                    <div>
                        <Field name='openGraphTitle' register={register}/>
                        <Field name='openGraphDescription' register={register}/>
                        <Field name='keywords' register={register}/>
                    </div>
                    <div>
                        <CoverImageField name='coverImage' register={register} errors={errors}/>
                    </div>
                </div>
            </div>
            <input type="submit" value='send' />
        </form>
    )
}

export default Form
