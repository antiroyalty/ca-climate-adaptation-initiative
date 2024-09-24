// Placeholder for delta between baseload
// and load with heatpump
// Corresponds to NREL climate zone column: heating_hp_bkup_fa
// https://data.openei.org/s3_viewer?bucket=oedi-data-lake&prefix=nrel-pds-building-stock%2Fend-use-load-profiles-for-us-building-stock%2F2024%2Fresstock_tmy3_release_2%2Ftimeseries_aggregates%2Fby_building_america_climate_zone%2Fupgrade%3D9%2F

export const heatpumpLoadProfile = {
    single_family_detatched: {
        unknown: { // no load
            summer: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            winter: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        },
        very_cold: {
            summer: [0.8169385170650927, 0.7211163714477733, 0.6636717279905916, 0.6418396037346392, 0.64062832421275, 0.6916853848646318, 0.8090575796851005, 0.9139277133736563, 0.9876557999711986, 1.0613178763440867, 1.1357439006096397, 1.2087386742751545, 1.284879551291283, 1.3490355672763075, 1.4290771049347166, 1.549654953917052, 1.704674854190669, 1.828984681019586, 1.8518346414170517, 1.7712332289266524, 1.6475487351190479, 1.5021473664314522, 1.2463262138776887, 0.980258709557412],
            winter: [3.240597925967263, 3.1271204520089295, 3.080324020337302, 3.0962771887400806, 3.1121975942460325, 3.201513371155756, 3.3415681175595244, 3.531802883184525, 3.666544190228175, 3.6869706132192506, 3.6616101376488093, 3.5812653800843264, 3.50202543092758, 3.4146854042658754, 3.262323332093256, 3.171707948908733, 3.183696862599209, 3.32752941778274, 3.49964406622024, 3.634282936507939, 3.6724622550843273, 3.6589358630952407, 3.5743544084821437, 3.424745182291668],
        },
        // mixed_humid: {
        //     summer: 
        //     winter: 
        // },
        // mixed_dry: {
        //     summer: 
        //     winter: 
        // },
        marine: {
            summer: [1.264564895965576, 0.9679833987213026, 0.8014757363475536, 0.709955424652157, 0.6588049424636868, 0.6402584736689156, 0.6575267555331228, 0.7254315988314297, 0.8418768010370312, 0.9136190335071923, 0.9601211487378731, 1.005028652166599, 1.0556376722647953, 1.1294464991307107, 1.2502262755115052, 1.3690148238221247, 1.527692768320104, 1.7536613400327332, 2.0124263129853137, 2.186363157512353, 2.1695304952660663, 2.0167396825943102, 1.808203720486192, 1.6075715756078675],
            winter: [2.3283008916811556, 2.1716897054949706, 1.9901559763711087, 1.8991789829303003, 1.8529995857699826, 1.9345617110531594, 2.019707496312102, 2.2043405912491467, 2.4313278028028047, 2.678276234128867, 2.834919085532904, 2.801737410436755, 2.6623775117222497, 2.4496087916864253, 2.2332199502133734, 2.083770887334705, 1.8664522377640802, 1.7608964602760666, 1.8023183591486238, 1.9941776757020198, 2.202724726041833, 2.34426824785312, 2.406399110294507, 2.3913687233285934],
        },
        // hot_humid: {
        //     summer: 
        //     winter: 
        // },
        // hot_dry: {
        //     summer: 
        //     winter: 
        // },
        // cold: {
        //     summer: 
        //     winter: 
        // }
    }
};
export type ClimateZone = keyof typeof heatpumpLoadProfile;

  