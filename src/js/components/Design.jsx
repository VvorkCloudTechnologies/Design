import React, { Component } from 'react';

class DesignMokup extends Component {
    
    render() {
        var StyleHeading={
            backgroundColor:'red',
            fontSize:'12px',
            padding:2,
            fontWeight:'bold',
            textAlign:"center"
        }
        
        var StyleHeading3={
            backgroundColor:'yellow',
            fontSize:'12px',
            padding:2,
            textAlign:"center",
            fontWeight:'bold',
        }
        
        var StyleHeading5={
            backgroundColor:'green',
            fontSize:'12px',
            padding:2,
            textAlign:"center",
            fontWeight:'bold',
        }
        
        var StyleHeadingScore={
            backgroundColor:'orange',
            fontSize:'12px',
            padding:2,
            textAlign:"center",
            fontWeight:'bold',
        }
        var StyleHeadingScore4={
            backgroundColor:'lightgreen',
            fontSize:'12px',
            fontWeight:'bold',
            padding:2,
            textAlign:"center"
        }


        var definationStyle={
            backgroundColor:'#eee',
            height:100,
            border:'1px solid #fff',
            fontSize:12,
            padding:5,
            fontWeight:'bold',
        }

        
        var PeopleSkilldefinationStyle={
            backgroundColor:'#eee',
            height:70,
            border:'1px solid #fff',
            padding:5,
            fontSize:11,
            fontWeight:'bold',
        }


        var dataArr = [
            {
                "score": 1,
                "definition": "UNACCEPTABLE",
                "h1":"Passion",
                "h2":"People Skills",
                "description": "now use Lorem Ipsum as the printing and typesetting industry. Lorem Ipsum has been the industry's 1500"
            },
            {
                "score": 2,
                "definition": "",
                "h1":"",
                "description": ""
            },
            {
                "score": 3,
                "definition": "MEETING REQUIREMENTS",
                "h1":"",
                "description": "now use Lorem Ipsum as the printing and typesetting industry. Lorem Ipsum has been the industry's 1500"
            },
            {
                "score": 4,
                "definition": "",
                "h1":"",
                "description": ""
            },
            {
                "score": 5,
                "definition": "EXCEPTIONAL",
                "h1":"",
                "h2":"",
                "description": "now use Lorem Ipsum as themLorem Ipsum has been the industry's 1500"
            },

        ];

        return (
            <div className="container" style={{width:'640px',height:630,marginTop:10,marginLeft:'15%',backgroundColor:'#fff',border:'solid #fff'}}>
                <div className="row">
                    <div className="col-md-12">
                        <h3  style={{padding:'5px 0px 0px 15px'}}><b><u>Dimension Definitions</u></b></h3>
                    </div>
                    <div className="col-md-12">
                        <p style={{color:'grey',padding:10,fontSize:18}}><b style={{color:'#000'}}>Passion -</b> Lavel of positive emotion,directed at a specific target(ie:teaching). Demonstrates dedication towards profession</p>
                    </div>
                    <div className="col-md-12">
                        <p style={{color:'grey',padding:10,fontSize:18}}><b style={{color:'#000'}}>People Skills - </b> Communictes to find mutual understanding.Actively listens and thoughtfulu questions to understand need.Spaks with clarity,conviction and authenticity when making a recommendation or presenting a point of view.</p>
                    </div>
                    <div className="col-md-12">
                        <p style={{color:'black',padding:5,fontSize:18}}> <u><strong>Rating Scale</strong></u></p>
                    </div>
                </div>
                <div className="row" style={{width:630,overflow:'hidden'}}>
                    <div className="col-md-12" style={{border:'2px solid #fff'}}>
                        <div className="col-md-4 nopadding">
                            <div className="col-md-9" style={StyleHeading}>
                                {dataArr[0].score}-{dataArr[0].definition}
                            </div>
                            <div className="col-md-3" style={StyleHeadingScore}>
                                {dataArr[1].score}
                            </div>
                        </div>
                        <div className="col-md-5 nopadding">
                            <div className="col-md-10" style={StyleHeading3}>
                                {dataArr[2].score}-{dataArr[2].definition}
                            </div>
                            <div className="col-md-2" style={StyleHeadingScore4}>
                                {dataArr[3].score}
                            </div>
                        </div>
                        <div className="col-md-3 nopadding">
                            <div className="col-md-12" style={StyleHeading5}>
                                {dataArr[4].score}-{dataArr[4].definition}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12" >
                        <p className="col-md-12" style={{backgroundColor:'#eee',fontWeight:'bold'}}>Passion</p>
                    </div>
                    <div className="col-md-12" style={{marginTop:'-10px'}}>
                        <div className="col-md-4 nopadding">
                            <div className="col-md-9 nopadding" style={definationStyle}>
                                <p style={{padding:'2px'}}>{dataArr[0].description}</p>
                            </div>
                            <div className="col-md-3" style={definationStyle}>

                            </div>
                        </div>
                        <div className="col-md-5 nopadding">
                            <div className="col-md-10 " style={definationStyle}>
                                <p style={{padding:'2px'}}>{dataArr[2].description}</p>
                            </div>
                            <div className="col-md-2" style={definationStyle}>
                               
                            </div>
                        </div>
                        <div className="col-md-3 nopadding">
                            <div className="col-md-12 nopadding" style={definationStyle}>
                                <p style={{padding:'2px'}}>{dataArr[4].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12" >
                        <p className="col-md-12" style={{backgroundColor:'#eee',fontWeight:'bold'}}>People Skills</p>
                    </div>
                    <div className="col-md-12" style={{marginTop:'-10px'}}>
                        <div className="col-md-4 nopadding">
                            <div className="col-md-9 nopadding" style={PeopleSkilldefinationStyle}>
                                <p style={{padding:'2px'}}>{dataArr[0].description}</p>
                            </div>
                            <div className="col-md-3" style={PeopleSkilldefinationStyle}>

                            </div>
                        </div>
                        <div className="col-md-5 nopadding">
                            <div className="col-md-10 " style={PeopleSkilldefinationStyle}>
                                <p style={{padding:'2px'}}>{dataArr[2].description}</p>
                            </div>
                            <div className="col-md-2" style={PeopleSkilldefinationStyle}>
                               
                            </div>
                        </div>
                        <div className="col-md-3 nopadding">
                            <div className="col-md-12 nopadding" style={PeopleSkilldefinationStyle}>
                                <p style={{padding:'2px'}}>{dataArr[4].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DesignMokup;