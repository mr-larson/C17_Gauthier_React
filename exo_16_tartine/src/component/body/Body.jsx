

import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <div class="container-fluid bg-dark p-4">
                <div class="row">
                    <div class="col-sm-4 d-flex justify-content-center">
                        <img className="myimg m-2" src="./img/nicky.jpg" alt="nicky"/>
                    </div>
                    <div class="col-sm-offset-2 col-sm-5">
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corporis repellendus error velit quo voluptates iste soluta dignissimos, quasi, non dolores nemo ad praesentium natus pariatur sequi culpa rem eius vero sit in perferendis expedita, debitis ab. Laboriosam maiores et nobis aperiam voluptatum? Vero eius dolorem rerum, pariatur neque eos.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4 d-flex justify-content-center">
                        <img className="myimg m-2" src="./img/nicky.jpg" alt="nicky"/>
                    </div>
                    <div class="col-sm-offset-2 col-sm-5">
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corporis repellendus error velit quo voluptates iste soluta dignissimos, quasi, non dolores nemo ad praesentium natus pariatur sequi culpa rem eius vero sit in perferendis expedita, debitis ab. Laboriosam maiores et nobis aperiam voluptatum? Vero eius dolorem rerum, pariatur neque eos.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
