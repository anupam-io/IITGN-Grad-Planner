import React, { useState, useEffect } from "react";

// SERVICES
import productService from './services/productService';
import addProductReq from './req/addProductReq'
import deleteProductReq from './req/deleteProductReq'

function App() {
	const [products, setproducts] = useState(null);
	const [name, setname] = useState(null);
	const [desc, setdesc] = useState(null);
	const [Dname, setDname] = useState(null);

	useEffect(() => {
		// Do some initial work
		// ComponentDidMount
	});

	let courseList = ["ES223", "HS778", "ES001", "BS069", "AB982"];
	function ReptileListItems() {
		return courseList.map((c) => 
		(
			<div className="card col-3 m-1">
			<div className="card-body">
				<h5 className="card-title">{c}</h5>
				<p className="card-text">4</p>
				<a href="#" class="btn btn-primary">Add</a>
			</div>
			</div>
		)
		);
	}

	return (
		<div className="App m-3">
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
			<h1 align="center" className="jumbotron">Graduation Plan #12</h1>
			<div className="container">
			<table class="table">
				<tbody>
				<tr>
						<th scope="row"><h3>1</h3></th>
						<div class="row">
						{ReptileListItems()}
						</div>
						<td><b>Sum</b></td>
					</tr>
					<tr>
						<th scope="row"><h3>2</h3></th>
						<div class="row">
						{ReptileListItems()}
						</div>
						<td><b>Sum</b></td>
					</tr>
					<tr>
						<th scope="row"><h3>3</h3></th>
						<div class="row">
						{ReptileListItems()}
						</div>
						<td><b>Sum</b></td>
					</tr>
				</tbody>
			</table>

				<div className="my-5">
					<h3  align="center">Final Statistics</h3>
					
					<div className="bg-success text-white p-4 m-2" style={{borderRadius: "1em"}}>
						<h4>Total credits: 175</h4>
						<p>(Satisfied)</p>
					</div>
					
					<div className="bg-danger text-white p-2 m-2" style={{borderRadius: "1em"}}>
						<h4>HSS credits: 17</h4>
						<p>(Not satisfied)</p>
					</div>
					
				
				</div>
			</div>
		</div>
	);
}

export default App;
