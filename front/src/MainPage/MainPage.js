import * as React from "react";

export default ({ products }) => <div className="container-fluid">
  <br></br>
  {products.length > 0 &&
    <div align="left" className="row">
      <h2 className="col-sm-12">Products: {products.length} Results</h2>
    </div>
  }
  {products &&
    <div style={{ display: "flex" }}>
      <div className="row">
      {products.map((product) =>
        <div key={product.id} className="card" style={{ width: "11.5rem" }}>
          <img src={product.img_url} className="card-img-top" alt={`${product.description}`} />
          <div className="card-body" style={{display: "flex",flexDirection:"Column" }}>
            <h5 className="card-title">{product.description}</h5>
            <p className="card-text" style={{flexGrow:'1'}}>{product.price} MYR</p>
          </div>
        </div>
      )}
      </div>
    </div>
  }
  </div>
