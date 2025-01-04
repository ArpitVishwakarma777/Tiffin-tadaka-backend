const express = require('express');
const mongoose = require('mongoose');
const { type } = require('os');
const testimonialSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    src:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }
});
const TESTIMONIAL = mongoose.model('testimonialData',testimonialSchema)
module.exports = TESTIMONIAL;