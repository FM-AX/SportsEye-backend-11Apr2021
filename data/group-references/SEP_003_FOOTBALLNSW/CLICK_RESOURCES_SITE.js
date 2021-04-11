// V1.2

module.exports = `

<div class="scorecard">

<h3>{SITE_NAME}</h3>

<h3>CLUBS</h3>
<p>{SITE_CLUBS}</p>

<h3>VENUE HIERARCHY LEVEL:</h3>
<p>{SITE_HIERARCHY}</p>

<h3>PLAYING FIELD ASSETS:</h3>
<p>Total Playing Fields: <b>{SITE_ASSET_PLAY_FIELD}</b></p>
<p>Total Synthetic Playing Fields: <b>{SITE_ASSET_SYN_FIELD}</b></p>
<p>Raw Playing Field Capacity: <b>{SITE_ASSET_RAW_CAPACITY}</b></p>
<p>FSE Playing Field Capacity: <b>{SITE_ASSET_FSE_CAPACITY}</b></p>

<h3>BUILDING ASSETS:</h3>
<p>Main Pavillion: <b>{SITE_TYPE_PAV}</b></p>
<p>Player Changing Rooms: <b>{SITE_ASSET_CHNG}</b></p>

<h3>SITE REPORT:</h3>
<p>Download: <a href="{SITE_REPORT_URL}" target=_blank><span style="font-weight:bold; text-decoration:underline;">{SITE_REPORT_URL}</span></a></p>

</div> <!-- END OF TABLE -->

`
