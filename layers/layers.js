var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_juterreo_1 = new ol.format.GeoJSON();
var features_juterreo_1 = format_juterreo_1.readFeatures(json_juterreo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_juterreo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_juterreo_1.addFeatures(features_juterreo_1);
var lyr_juterreo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_juterreo_1, 
                style: style_juterreo_1,
                popuplayertitle: 'ju-terreo',
                interactive: true,
    title: 'ju-terreo<br />\
    <img src="styles/legend/juterreo_1_0.png" /> AUDIN<br />\
    <img src="styles/legend/juterreo_1_1.png" /> BIUNILA<br />\
    <img src="styles/legend/juterreo_1_2.png" /> COMPARTILHADO<br />\
    <img src="styles/legend/juterreo_1_3.png" /> CORREGEDORIA<br />\
    <img src="styles/legend/juterreo_1_4.png" /> EaD<br />\
    <img src="styles/legend/juterreo_1_5.png" /> EdUNILA<br />\
    <img src="styles/legend/juterreo_1_6.png" /> ILAACH<br />\
    <img src="styles/legend/juterreo_1_7.png" /> ILACVN<br />\
    <img src="styles/legend/juterreo_1_8.png" /> ILACVN/ILATIT<br />\
    <img src="styles/legend/juterreo_1_9.png" /> ILAESP<br />\
    <img src="styles/legend/juterreo_1_10.png" /> ILATIT<br />\
    <img src="styles/legend/juterreo_1_11.png" /> IMEA<br />\
    <img src="styles/legend/juterreo_1_12.png" /> OUVIDORIA<br />\
    <img src="styles/legend/juterreo_1_13.png" /> PPGIES<br />\
    <img src="styles/legend/juterreo_1_14.png" /> PRAE<br />\
    <img src="styles/legend/juterreo_1_15.png" /> PROAGI<br />\
    <img src="styles/legend/juterreo_1_16.png" /> PROCURADORIA<br />\
    <img src="styles/legend/juterreo_1_17.png" /> PROEX<br />\
    <img src="styles/legend/juterreo_1_18.png" /> PROGEPE<br />\
    <img src="styles/legend/juterreo_1_19.png" /> PROGRAD<br />\
    <img src="styles/legend/juterreo_1_20.png" /> PROINT<br />\
    <img src="styles/legend/juterreo_1_21.png" /> PROPLAN<br />\
    <img src="styles/legend/juterreo_1_22.png" /> PRPPG<br />\
    <img src="styles/legend/juterreo_1_23.png" /> PRU<br />\
    <img src="styles/legend/juterreo_1_24.png" /> REITORIA<br />\
    <img src="styles/legend/juterreo_1_25.png" /> SACT<br />\
    <img src="styles/legend/juterreo_1_26.png" /> SECAFE<br />\
    <img src="styles/legend/juterreo_1_27.png" /> SECOM<br />\
    <img src="styles/legend/juterreo_1_28.png" /> Uso comum<br />\
    <img src="styles/legend/juterreo_1_29.png" /> <br />' });
var format_limitesterreo_2 = new ol.format.GeoJSON();
var features_limitesterreo_2 = format_limitesterreo_2.readFeatures(json_limitesterreo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limitesterreo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limitesterreo_2.addFeatures(features_limitesterreo_2);
var lyr_limitesterreo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limitesterreo_2, 
                style: style_limitesterreo_2,
                popuplayertitle: 'limites-terreo',
                interactive: false,
                title: '<img src="styles/legend/limitesterreo_2.png" /> limites-terreo'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_juterreo_1.setVisible(true);lyr_limitesterreo_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_juterreo_1,lyr_limitesterreo_2];
lyr_juterreo_1.set('fieldAliases', {'ID': 'ID', 'ju-terreo_SALA': 'SALA', 'ju-terreo_DESCRICAO': 'DESCRICAO', 'ju-terreo_AREA': 'AREA', 'ju-terreo_CAPACIDADE': 'CAPACIDADE', 'ju-terreo_USO': 'USO', 'ju-terreo_SETOR': 'SETOR', 'ju-terreo_RESPONSAVEL': 'RESPONSAVEL', });
lyr_limitesterreo_2.set('fieldAliases', {'ID': 'ID', });
lyr_juterreo_1.set('fieldImages', {'ID': 'TextEdit', 'ju-terreo_SALA': 'TextEdit', 'ju-terreo_DESCRICAO': 'TextEdit', 'ju-terreo_AREA': 'TextEdit', 'ju-terreo_CAPACIDADE': 'Range', 'ju-terreo_USO': 'TextEdit', 'ju-terreo_SETOR': 'TextEdit', 'ju-terreo_RESPONSAVEL': 'TextEdit', });
lyr_limitesterreo_2.set('fieldImages', {'ID': 'TextEdit', });
lyr_juterreo_1.set('fieldLabels', {'ID': 'inline label - visible with data', 'ju-terreo_SALA': 'inline label - visible with data', 'ju-terreo_DESCRICAO': 'inline label - visible with data', 'ju-terreo_AREA': 'inline label - visible with data', 'ju-terreo_CAPACIDADE': 'inline label - visible with data', 'ju-terreo_USO': 'inline label - visible with data', 'ju-terreo_SETOR': 'inline label - visible with data', 'ju-terreo_RESPONSAVEL': 'inline label - visible with data', });
lyr_limitesterreo_2.set('fieldLabels', {'ID': 'inline label - visible with data', });
lyr_limitesterreo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});