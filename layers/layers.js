var wms_layers = [];
var lyr_MapatopogrficdeCatalunya125000_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/icc_mapesbase/wms/service?",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "mtc25m",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Mapa topogràfic de Catalunya 1:25.000",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MapatopogrficdeCatalunya125000_0, 0]);var lyr_OrtofotodeCatalunya125000vigent_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/icc_mapesbase/wms/service?",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "orto25m",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Ortofoto de Catalunya 1:25.000 vigent",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofotodeCatalunya125000vigent_1, 0]);var format_GHI_PV_2 = new ol.format.GeoJSON();
var features_GHI_PV_2 = format_GHI_PV_2.readFeatures(json_GHI_PV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GHI_PV_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_GHI_PV_2.addFeatures(features_GHI_PV_2);var lyr_GHI_PV_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GHI_PV_2, 
                style: style_GHI_PV_2,
    title: 'GHI_PV<br />\
    <img src="styles/legend/GHI_PV_2_0.png" /> 124,0 - 147,0<br />\
    <img src="styles/legend/GHI_PV_2_1.png" /> 147,0 - 153,0<br />\
    <img src="styles/legend/GHI_PV_2_2.png" /> 153,0 - 157,0<br />\
    <img src="styles/legend/GHI_PV_2_3.png" /> 157,0 - 161,0<br />\
    <img src="styles/legend/GHI_PV_2_4.png" /> 161,0 - 167,0<br />\
    <img src="styles/legend/GHI_PV_2_5.png" /> 167,0 - 172,0<br />\
    <img src="styles/legend/GHI_PV_2_6.png" /> 172,0 - 177,0<br />\
    <img src="styles/legend/GHI_PV_2_7.png" /> 177,0 - 180,0<br />\
    <img src="styles/legend/GHI_PV_2_8.png" /> 180,0 - 182,0<br />\
    <img src="styles/legend/GHI_PV_2_9.png" /> 182,0 - 185,0<br />\
    <img src="styles/legend/GHI_PV_2_10.png" /> 185,0 - 187,0<br />\
    <img src="styles/legend/GHI_PV_2_11.png" /> 187,0 - 189,0<br />\
    <img src="styles/legend/GHI_PV_2_12.png" /> 189,0 - 190,0<br />\
    <img src="styles/legend/GHI_PV_2_13.png" /> 190,0 - 192,0<br />\
    <img src="styles/legend/GHI_PV_2_14.png" /> 192,0 - 193,0<br />\
    <img src="styles/legend/GHI_PV_2_15.png" /> 193,0 - 194,0<br />\
    <img src="styles/legend/GHI_PV_2_16.png" /> 194,0 - 197,0<br />\
    <img src="styles/legend/GHI_PV_2_17.png" /> 197,0 - 205,0<br />'
        });var format_Capa_Comarques_3 = new ol.format.GeoJSON();
var features_Capa_Comarques_3 = format_Capa_Comarques_3.readFeatures(json_Capa_Comarques_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capa_Comarques_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Capa_Comarques_3.addFeatures(features_Capa_Comarques_3);var lyr_Capa_Comarques_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capa_Comarques_3, 
                style: style_Capa_Comarques_3,
                title: '<img src="styles/legend/Capa_Comarques_3.png" /> Capa_Comarques'
            });var format_Capa_Municipis_4 = new ol.format.GeoJSON();
var features_Capa_Municipis_4 = format_Capa_Municipis_4.readFeatures(json_Capa_Municipis_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capa_Municipis_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Capa_Municipis_4.addFeatures(features_Capa_Municipis_4);var lyr_Capa_Municipis_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capa_Municipis_4, 
                style: style_Capa_Municipis_4,
                title: '<img src="styles/legend/Capa_Municipis_4.png" /> Capa_Municipis'
            });var format_Catalunya_Polygon_5 = new ol.format.GeoJSON();
var features_Catalunya_Polygon_5 = format_Catalunya_Polygon_5.readFeatures(json_Catalunya_Polygon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Catalunya_Polygon_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Catalunya_Polygon_5.addFeatures(features_Catalunya_Polygon_5);var lyr_Catalunya_Polygon_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Catalunya_Polygon_5, 
                style: style_Catalunya_Polygon_5,
                title: '<img src="styles/legend/Catalunya_Polygon_5.png" /> Catalunya_Polygon'
            });var format_Parcelari_seleccionat_6 = new ol.format.GeoJSON();
var features_Parcelari_seleccionat_6 = format_Parcelari_seleccionat_6.readFeatures(json_Parcelari_seleccionat_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelari_seleccionat_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Parcelari_seleccionat_6.addFeatures(features_Parcelari_seleccionat_6);var lyr_Parcelari_seleccionat_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelari_seleccionat_6, 
                style: style_Parcelari_seleccionat_6,
                title: '<img src="styles/legend/Parcelari_seleccionat_6.png" /> Parcelari_seleccionat'
            });var format_Parcelari_proactiu_7 = new ol.format.GeoJSON();
var features_Parcelari_proactiu_7 = format_Parcelari_proactiu_7.readFeatures(json_Parcelari_proactiu_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelari_proactiu_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Parcelari_proactiu_7.addFeatures(features_Parcelari_proactiu_7);var lyr_Parcelari_proactiu_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelari_proactiu_7, 
                style: style_Parcelari_proactiu_7,
                title: '<img src="styles/legend/Parcelari_proactiu_7.png" /> Parcelari_proactiu'
            });var format_Parcelari_proactiu_Centroids_8 = new ol.format.GeoJSON();
var features_Parcelari_proactiu_Centroids_8 = format_Parcelari_proactiu_Centroids_8.readFeatures(json_Parcelari_proactiu_Centroids_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelari_proactiu_Centroids_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Parcelari_proactiu_Centroids_8.addFeatures(features_Parcelari_proactiu_Centroids_8);var lyr_Parcelari_proactiu_Centroids_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelari_proactiu_Centroids_8, 
                style: style_Parcelari_proactiu_Centroids_8,
                title: '<img src="styles/legend/Parcelari_proactiu_Centroids_8.png" /> Parcelari_proactiu_Centroids'
            });
var group_Parcelaris = new ol.layer.Group({
                                layers: [lyr_Parcelari_seleccionat_6,lyr_Parcelari_proactiu_7,lyr_Parcelari_proactiu_Centroids_8,],
                                title: "Parcelaris"});
var group_CapesBase = new ol.layer.Group({
                                layers: [lyr_Capa_Comarques_3,lyr_Capa_Municipis_4,lyr_Catalunya_Polygon_5,],
                                title: "Capes Base"});
var group_Irradiaci = new ol.layer.Group({
                                layers: [lyr_GHI_PV_2,],
                                title: "Irradiació"});
var group_CapesICGC = new ol.layer.Group({
                                layers: [lyr_MapatopogrficdeCatalunya125000_0,lyr_OrtofotodeCatalunya125000vigent_1,],
                                title: "Capes ICGC"});

lyr_MapatopogrficdeCatalunya125000_0.setVisible(true);lyr_OrtofotodeCatalunya125000vigent_1.setVisible(true);lyr_GHI_PV_2.setVisible(false);lyr_Capa_Comarques_3.setVisible(true);lyr_Capa_Municipis_4.setVisible(true);lyr_Catalunya_Polygon_5.setVisible(true);lyr_Parcelari_seleccionat_6.setVisible(true);lyr_Parcelari_proactiu_7.setVisible(true);lyr_Parcelari_proactiu_Centroids_8.setVisible(true);
var layersList = [group_CapesICGC,group_Irradiaci,group_CapesBase,group_Parcelaris];
lyr_GHI_PV_2.set('fieldAliases', {'GHI_v_Wm2': 'GHI_v_Wm2', });
lyr_Capa_Comarques_3.set('fieldAliases', {'CODICOMAR': 'CODICOMAR', 'NOMCOMAR': 'NOMCOMAR', 'AREACOMAR': 'AREACOMAR', 'DATAALTA': 'DATAALTA', });
lyr_Capa_Municipis_4.set('fieldAliases', {'CODIMUNI': 'CODIMUNI', 'NOMMUNI': 'NOMMUNI', 'AREAOFI': 'AREAOFI', 'AREAPOL': 'AREAPOL', 'CODICOMAR': 'CODICOMAR', 'CODIPROV': 'CODIPROV', 'VALIDDE': 'VALIDDE', 'DATAALTA': 'DATAALTA', });
lyr_Catalunya_Polygon_5.set('fieldAliases', {'fid': 'fid', });
lyr_Parcelari_seleccionat_6.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'beginLifes': 'beginLifes', 'endLifespa': 'endLifespa', 'localId': 'localId', 'namespace': 'namespace', 'label': 'label', 'nationalCa': 'nationalCa', 'pos': 'pos', 'layer': 'layer', 'Estudiat': 'Estudiat', });
lyr_Parcelari_proactiu_7.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'localId': 'localId', 'pos': 'pos', 'Municipi': 'Municipi', });
lyr_Parcelari_proactiu_Centroids_8.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'localId': 'localId', 'pos': 'pos', 'Municipi': 'Municipi', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_GHI_PV_2.set('fieldImages', {'GHI_v_Wm2': 'Range', });
lyr_Capa_Comarques_3.set('fieldImages', {'CODICOMAR': 'TextEdit', 'NOMCOMAR': 'TextEdit', 'AREACOMAR': 'TextEdit', 'DATAALTA': 'TextEdit', });
lyr_Capa_Municipis_4.set('fieldImages', {'CODIMUNI': 'TextEdit', 'NOMMUNI': 'TextEdit', 'AREAOFI': 'TextEdit', 'AREAPOL': 'TextEdit', 'CODICOMAR': 'TextEdit', 'CODIPROV': 'TextEdit', 'VALIDDE': 'TextEdit', 'DATAALTA': 'TextEdit', });
lyr_Catalunya_Polygon_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_Parcelari_seleccionat_6.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'beginLifes': 'TextEdit', 'endLifespa': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'label': 'TextEdit', 'nationalCa': 'TextEdit', 'pos': 'TextEdit', 'layer': 'TextEdit', 'Estudiat': 'TextEdit', });
lyr_Parcelari_proactiu_7.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'Range', 'areaValue_': 'TextEdit', 'localId': 'TextEdit', 'pos': 'TextEdit', 'Municipi': '', });
lyr_Parcelari_proactiu_Centroids_8.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'Range', 'areaValue_': 'TextEdit', 'localId': 'TextEdit', 'pos': 'TextEdit', 'Municipi': 'TextEdit', 'latitud': '', 'longitud': '', });
lyr_GHI_PV_2.set('fieldLabels', {});
lyr_Capa_Comarques_3.set('fieldLabels', {});
lyr_Capa_Municipis_4.set('fieldLabels', {});
lyr_Catalunya_Polygon_5.set('fieldLabels', {});
lyr_Parcelari_seleccionat_6.set('fieldLabels', {});
lyr_Parcelari_proactiu_7.set('fieldLabels', {});
lyr_Parcelari_proactiu_Centroids_8.set('fieldLabels', {});
lyr_Parcelari_proactiu_Centroids_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});