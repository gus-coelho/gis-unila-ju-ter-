var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PavimentoTrreo_1 = new ol.format.GeoJSON();
var features_PavimentoTrreo_1 = format_PavimentoTrreo_1.readFeatures(json_PavimentoTrreo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PavimentoTrreo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PavimentoTrreo_1.addFeatures(features_PavimentoTrreo_1);
var lyr_PavimentoTrreo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PavimentoTrreo_1, 
                style: style_PavimentoTrreo_1,
                popuplayertitle: 'Pavimento Térreo',
                interactive: true,
    title: 'Pavimento Térreo<br />\
    <img src="styles/legend/PavimentoTrreo_1_0.png" /> Acadêmico<br />\
    <img src="styles/legend/PavimentoTrreo_1_1.png" /> Administrativo<br />\
    <img src="styles/legend/PavimentoTrreo_1_2.png" /> Atend. Individualizado<br />\
    <img src="styles/legend/PavimentoTrreo_1_3.png" /> CORREGEDORIA<br />\
    <img src="styles/legend/PavimentoTrreo_1_4.png" /> Auditório<br />\
    <img src="styles/legend/PavimentoTrreo_1_5.png" /> Biblioteca<br />\
    <img src="styles/legend/PavimentoTrreo_1_6.png" /> Circulação<br />\
    <img src="styles/legend/PavimentoTrreo_1_7.png" /> Convivência<br />\
    <img src="styles/legend/PavimentoTrreo_1_8.png" /> Copa – Cozinha – Cantina<br />\
    <img src="styles/legend/PavimentoTrreo_1_9.png" /> Depósito<br />\
    <img src="styles/legend/PavimentoTrreo_1_10.png" /> Dormitório<br />\
    <img src="styles/legend/PavimentoTrreo_1_11.png" /> Esporte<br />\
    <img src="styles/legend/PavimentoTrreo_1_12.png" /> Extensão<br />\
    <img src="styles/legend/PavimentoTrreo_1_13.png" /> Lab. de Informática<br />\
    <img src="styles/legend/PavimentoTrreo_1_14.png" /> Laboratório – Ensino<br />\
    <img src="styles/legend/PavimentoTrreo_1_15.png" /> Laboratório – Pesquisa<br />\
    <img src="styles/legend/PavimentoTrreo_1_16.png" /> Laboratório – Prática<br />\
    <img src="styles/legend/PavimentoTrreo_1_17.png" /> Monitoria<br />\
    <img src="styles/legend/PavimentoTrreo_1_18.png" /> Restaurante<br />\
    <img src="styles/legend/PavimentoTrreo_1_19.png" /> Reunião<br />\
    <img src="styles/legend/PavimentoTrreo_1_20.png" /> Sala de aula<br />\
    <img src="styles/legend/PavimentoTrreo_1_21.png" /> Sala de aula (Pós)<br />\
    <img src="styles/legend/PavimentoTrreo_1_22.png" /> Sala de estudo<br />\
    <img src="styles/legend/PavimentoTrreo_1_23.png" /> Sala de Professores<br />\
    <img src="styles/legend/PavimentoTrreo_1_24.png" /> Sala Técnica<br />\
    <img src="styles/legend/PavimentoTrreo_1_25.png" /> Sanitários<br />\
    <img src="styles/legend/PavimentoTrreo_1_26.png" /> Saúde<br />\
    <img src="styles/legend/PavimentoTrreo_1_27.png" /> <br />' });
var format_terreno_2 = new ol.format.GeoJSON();
var features_terreno_2 = format_terreno_2.readFeatures(json_terreno_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_terreno_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_terreno_2.addFeatures(features_terreno_2);
var lyr_terreno_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_terreno_2, 
                style: style_terreno_2,
                popuplayertitle: 'terreno',
                interactive: true,
                title: '<img src="styles/legend/terreno_2.png" /> terreno'
            });
var format_NvelTrreo_3 = new ol.format.GeoJSON();
var features_NvelTrreo_3 = format_NvelTrreo_3.readFeatures(json_NvelTrreo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NvelTrreo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NvelTrreo_3.addFeatures(features_NvelTrreo_3);
var lyr_NvelTrreo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NvelTrreo_3, 
                style: style_NvelTrreo_3,
                popuplayertitle: 'Nível Térreo',
                interactive: true,
                title: '<img src="styles/legend/NvelTrreo_3.png" /> Nível Térreo'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PavimentoTrreo_1.setVisible(true);lyr_terreno_2.setVisible(true);lyr_NvelTrreo_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PavimentoTrreo_1,lyr_terreno_2,lyr_NvelTrreo_3];
lyr_PavimentoTrreo_1.set('fieldAliases', {'ID': 'ID', 'ju-terreo_SALA': 'SALA', 'ju-terreo_DESCRICAO': 'DESCRICAO', 'ju-terreo_AREA': 'AREA', 'ju-terreo_CAPACIDADE': 'CAPACIDADE', 'ju-terreo_USO': 'USO', 'ju-terreo_SETOR': 'SETOR', 'ju-terreo_RESPONSAVEL': 'RESPONSAVEL', });
lyr_terreno_2.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_NvelTrreo_3.set('fieldAliases', {'ID': 'ID', 'nome': 'Prédio', 'url': 'Mais info', });
lyr_PavimentoTrreo_1.set('fieldImages', {'ID': 'TextEdit', 'ju-terreo_SALA': 'TextEdit', 'ju-terreo_DESCRICAO': 'TextEdit', 'ju-terreo_AREA': 'TextEdit', 'ju-terreo_CAPACIDADE': 'Range', 'ju-terreo_USO': 'TextEdit', 'ju-terreo_SETOR': 'TextEdit', 'ju-terreo_RESPONSAVEL': 'TextEdit', });
lyr_terreno_2.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_NvelTrreo_3.set('fieldImages', {'ID': 'TextEdit', 'nome': 'TextEdit', 'url': 'TextEdit', });
lyr_PavimentoTrreo_1.set('fieldLabels', {'ID': 'inline label - visible with data', 'ju-terreo_SALA': 'inline label - visible with data', 'ju-terreo_DESCRICAO': 'inline label - visible with data', 'ju-terreo_AREA': 'inline label - visible with data', 'ju-terreo_CAPACIDADE': 'inline label - visible with data', 'ju-terreo_USO': 'inline label - visible with data', 'ju-terreo_SETOR': 'inline label - visible with data', 'ju-terreo_RESPONSAVEL': 'inline label - visible with data', });
lyr_terreno_2.set('fieldLabels', {'id': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perimetro': 'inline label - visible with data', });
lyr_NvelTrreo_3.set('fieldLabels', {'ID': 'hidden field', 'nome': 'inline label - visible with data', 'url': 'inline label - visible with data', });
lyr_NvelTrreo_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});