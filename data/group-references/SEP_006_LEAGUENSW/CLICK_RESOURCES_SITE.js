// V1.2

module.exports = `

<div class="scorecard">

<h3>{SITE_NAME}</h3>

<h3>CLUBS</h3>
<p>{SITE_CLUBS}</p>

<h3>ASSOCIATION:</h3>
<p>{SITE_ASSOC}</p>

<h3>PLAYING FIELD ASSETS:</h3>
<p>Synthetic Fields: <b>{SITE_ASSET_FIELDS_SYN}</b></p>
<p>Size: <b> <!-- bug -->{SITE_ASSET_SIZE}</b></p>

<h3>BUILDING ASSETS:</h3>
<p>Kiosk: <b>{SITE_ASSET_KIOSK}</b></p>
<p>Toilet: <b>{SITE_ASSET_TOILET}</b></p>
<p>Player Changing Room: <b>{SITE_ASSET_CHNGERM}</b></p>
<p>Main Pavillion: <b>{SITE_ASSET_PAV}</b></p>

</div> <!-- END OF TABLE -->

`
