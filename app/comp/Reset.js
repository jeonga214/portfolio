"use client"
import { useState } from 'react';


export default function Reset() {

   

  return (
    <form>
      <input type="radio" name="tab" id="menu"/>
      <div className="container">
        <input type="radio" name="tab" defaultChecked="true" id="home"/>
        <section className="home">
          <h1>Home</h1>
          <label htmlFor="home"></label>
        </section>
        <input type="radio" name="tab" id="about"/>
        <section className="about">
          <h1>About</h1>
          <label htmlFor="about"></label>
        </section>
        <input type="radio" name="tab" id="work"/>
        <section className="work">
          <h1>Work</h1>
          <label htmlFor="work"></label>
        </section>
        <input type="radio" name="tab" id="contact"/>
        <section className="contact">
          <h1>Contact</h1>
          <label htmlFor="contact"></label>
        </section>
      </div>
      <div className="menu">
        <div>
          <label htmlFor="menu"></label>
          <label htmlFor="home"></label>
        </div>
      </div>
    </form>
  )
}
