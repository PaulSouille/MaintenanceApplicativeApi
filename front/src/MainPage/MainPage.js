import * as React from "react";

function getQueryVariable(variable)
{
        var query = window.location.search.substring(1);
        console.log(query)//"app=article&act=news_content&aid=160990"
        var vars = query.split("&");
        console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
        if(pair[0] == variable){return pair[1];}
         }
         return(false);
}
const startAt = parseInt(getQueryVariable('startAt'))+10
const startAtPrevious = parseInt(getQueryVariable('startAt'))-10
const hrefValueNext = '?startAt=' +startAt
const hrefValuePrevious= '?startAt=' +startAtPrevious
export default ({ products }) => <div className="container-fluid">
    <a href={hrefValuePrevious}>Précédent </a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href={hrefValueNext}>Suivant</a>
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
