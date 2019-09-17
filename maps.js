var map;

function initMap(){
    var options = {
        center: {lat:32.95, lng:-117.1611},
        zoom: 10,
    };
    
    map = new google.maps.Map(document.getElementById('map'), options);


    makeMarker({coors:{lat:33.09745, lng:-116.99572},
        content: '<h2>San Diego Zoo</h2>',
        });
    makeMarker({coors:{lat:32.70922, lng:-117.17007},
        content: '<h2>Seaport Village</h2>',
        });
    makeMarker({coors:{lat:32.70648, lng:-117.16614},
        content: '<h2>Comic Con</h2>',
        });
    makeMarker({coors:{lat:33.115875, lng:-117.120022},
        content: '<h2>Stone Brewery</h2>',
        });
    makeMarker({coors:{lat:32.715382, lng:-117.160545},
        content: '<h2>Café 21</h2>',
        });
    makeMarker({coors:{lat:32.783761, lng:-117.252811},
        content: '<h2>Surfari</h2>',
        });
    makeMarker({coors:{lat:32.926988, lng:-117.259269},
        content: '<h2>Torrey Pines</h2>',
        });
    makeMarker({coors:{lat:32.712614, lng:-117.160163},
        content: '<h2>Gaslamp Ghost Tour</h2>',
        });
    makeMarker({coors:{lat:32.865938, lng:-117.250414},
        content: '<h2>Birch Aquarium</h2>',
        });
    makeMarker({coors:{lat:32.731771, lng:-117.152293},
        content: '<h2>The Museum Of Man</h2>',
        });
    makeMarker({coors:{lat:32.763499, lng:-117.117130},
        content: '<h2>Adams Avenue Book Store</h2>',
        });
    makeMarker({coors:{lat:32.750202, lng:-117.129937},
        content: '<h2>Crazee Burger</h2>',
        });
    makeMarker({coors:{lat:32.824932, lng:-117.155888},
        content: '<h2>Convoy Street</h2>',
        });
    makeMarker({coors:{lat:32.951521, lng:-116.305594},
        content: '<h2>Agua Caliente</h2>',
        });
    makeMarker({coors:{lat:32.799316, lng:-117.244245},
        content: '<h2>Thrift Trader</h2>',
        });
    makeMarker({coors:{lat:32.767874, lng:-117.166531},
        content: '<h2>Fashion Valley</h2>',
        });
    makeMarker({coors:{lat:32.746271, lng:-117.250631},
        content: '<h2>Farmers Market</h2>',
        });
    makeMarker({coors:{lat:32.819280, lng:-117.225294},
        content: '<h2>House Of Scuba</h2>',
        });
    makeMarker({coors:{lat:32.730278, lng:-117.171850},
        content: '<h2>Rock The Casbah</h2>',
        });
    makeMarker({coors:{lat:33.128048, lng:-117.311518},
        content: '<h2>Legoland</h2>',
        });
    makeMarker({coors:{lat:32.709029, lng:-117.154239},
        content: '<h2>Central Library</h2>',
        });
    makeMarker({coors:{lat:32.732280, lng:-117.151504},
        content: '<h2>The Old Globe</h2>',
        });
    makeMarker({coors:{lat:32.729410, lng:-117.150415},
        content: '<h2>Spreckels Organ Pavilion</h2>',
        });
    makeMarker({coors:{lat:32.782899, lng:-117.252743},
        content: '<h2>Ray\'s Rent A Bike</h2>',
        });
    makeMarker({coors:{lat:32.578109, lng:-117.086512},
        content: '<h2>South Bay Drive-In</h2>',
        });
    makeMarker({coors:{lat:32.731115, lng:-117.138240},
        content: '<h2>Ninja Night Race</h2>',
        });
    makeMarker({coors:{lat:32.887686, lng:-117.252963},
        content: '<h2>Black\'s Beach</h2>',
        });
    makeMarker({coors:{lat:32.692975, lng:-117.136492},
        content: '<h2>Barrio Logan</h2>',
        });
    makeMarker({coors:{lat:32.720263, lng:-117.165970},
        content: '<h2>Desserts—Yum</h2>',
        });
    makeMarker({coors:{lat:32.743886, lng:-117.160621},
        content: '<h2>Hash House</h2>',
        });

    function makeMarker(props){
        var marker = new google.maps.Marker({
            position : props.coors,
            map : map,
        });
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content:props.content
            })
        }
        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        })

        
    }
};