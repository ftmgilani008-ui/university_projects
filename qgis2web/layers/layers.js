var wms_layers = [];

var format_sea_0 = new ol.format.GeoJSON();
var features_sea_0 = format_sea_0.readFeatures(json_sea_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sea_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sea_0.addFeatures(features_sea_0);
var lyr_sea_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sea_0, 
                style: style_sea_0,
                popuplayertitle: 'sea',
                interactive: true,
                title: '<img src="styles/legend/sea_0.png" /> sea'
            });
var format_iran_ostan_1 = new ol.format.GeoJSON();
var features_iran_ostan_1 = format_iran_ostan_1.readFeatures(json_iran_ostan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_iran_ostan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_iran_ostan_1.addFeatures(features_iran_ostan_1);
var lyr_iran_ostan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_iran_ostan_1, 
                style: style_iran_ostan_1,
                popuplayertitle: 'iran_ostan',
                interactive: true,
                title: '<img src="styles/legend/iran_ostan_1.png" /> iran_ostan'
            });
var format_city_2 = new ol.format.GeoJSON();
var features_city_2 = format_city_2.readFeatures(json_city_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_city_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_city_2.addFeatures(features_city_2);
var lyr_city_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_city_2, 
                style: style_city_2,
                popuplayertitle: 'city',
                interactive: true,
                title: '<img src="styles/legend/city_2.png" /> city'
            });

lyr_sea_0.setVisible(true);lyr_iran_ostan_1.setVisible(true);lyr_city_2.setVisible(true);
var layersList = [lyr_sea_0,lyr_iran_ostan_1,lyr_city_2];
lyr_sea_0.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', });
lyr_iran_ostan_1.set('fieldAliases', {'OSTAN': 'OSTAN', 'Area': 'Area', 'Perimeter': 'Perimeter', });
lyr_city_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', });
lyr_sea_0.set('fieldImages', {'ID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ACRES': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_iran_ostan_1.set('fieldImages', {'OSTAN': 'TextEdit', 'Area': 'TextEdit', 'Perimeter': 'TextEdit', });
lyr_city_2.set('fieldImages', {'OID_': 'Range', 'Name': 'TextEdit', });
lyr_sea_0.set('fieldLabels', {'ID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'ACRES': 'no label', 'HECTARES': 'no label', });
lyr_iran_ostan_1.set('fieldLabels', {'OSTAN': 'header label - always visible', 'Area': 'no label', 'Perimeter': 'no label', });
lyr_city_2.set('fieldLabels', {'OID_': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_city_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});