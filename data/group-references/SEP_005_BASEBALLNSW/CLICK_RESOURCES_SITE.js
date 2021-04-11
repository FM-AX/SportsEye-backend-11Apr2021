// V1.2

module.exports = `

<div class="scorecard">

<h3>{SITE_NAME}</h3>
<p>Association: <b>{SITE_ASSOC}</b></p>
<p>Heirarchy: <b>{SITE_LEVEL}</b></p>
<p>Heirarchy Gap: <b>{SITE_GAP_HIERARCHY}</b></p>
<p>Quality Gap: <b>{SITE_GAP_HIERARCHY}</b></p>
<p>Capacity: <b>{SITE_GAP_QUALITY}</b></p>

<h3>CLUBS</h3>
<p>{SITE_CLUBS}</p>

<h3>FACILITY ASSET TYPE</h3>
<p>Toilet Areas: <b>{SITE_ASSET_TOILET}</b></p>
<p>Changerooms: <b>{SITE_ASSET_CHNGERM}</b></p>
<p>Kiosk / Canteen: <b>{SITE_ASSET_KIOSK}</b></p>
<p>Clubhouse / Meeting: <b>{SITE_ASSET_MEETING}</b></p>
<p>Size (ha): <b>{SITE_ASSET_SIZE}</b></p>
<p>Lighting Coverage: <b>{SITE_ASSET_LIGHTING_PCNT}%</b></p>
<p>Lighting Level: <b>{SITE_ASSET_LIGHTING_LVL}</b></p>
<p>Season Availability: <b>{SITE_ASSET_SEASON}</b></p>
<p>Other Sport User: <b>{SITE_ASSET_USE_OTHER}</b></p>

<h3>FACILITTY DETAILS</h3>
<p>Backnets: <b>{SITE_ASSET_BACKNETS}</b></p>
<p>Dugouts: <b>{SITE_ASSET_DUGOUTS}</b></p>
<p>Max Int. Fields: <b>{SITE_ASSET_FIELDS_INT}</b></p>
<p>Max Snr. Fields: <b>{SITE_ASSET_FIELDS_SNR}</b></p>
<p>Max Jnr. Fields: <b>{SITE_ASSET_FIELDS_JNR}</b></p>
<p>TB-MP Fields: <b>{SITE_ASSET_FIELDS_TBMP}</b></p>
<p>Batting Tunnels: <b>{SITE_ASSET_TUNNELS}</b></p>

</div> <!-- END OF TABLE -->

`
