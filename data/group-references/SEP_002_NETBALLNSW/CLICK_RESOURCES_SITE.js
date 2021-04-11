// V1.2

module.exports = `

<div class="scorecard">

<h3>{SITE_NAME}</h3>

<h3>CLUBS</h3>
<p>{SITE_CLUBS}</p>

<h3>FACILITY ASSET TYPE</h3>
<p>Capacity: <b>{PROVISION_RATIO_COUNT}</b></p>
<p>Total Courts: <b>{SITE_ASSET_TYPE_CNT}</b></p>
<p>Hard Courts: <b>{SITE_ASSET_TYPE_CNT_A}</b></p>
<p>Grass Courts: <b>{SITE_ASSET_TYPE_CNT_B}</b></p>
<p>Outdoor Courts: <b>{SITE_TYPE_CNT_A}</b></p>
<p>Indoor Courts: <b>{SITE_TYPE_CNT_B}</b></p>
<p>Courts with Lighting: <b>{SITE_ASSET_INFO_A}</b></p>


<h3>SITE MANAGEMENT</h3>
<p>Use: <b>{SITE_ASSET_INFO_B}</b></p>

</div> <!-- END OF TABLE -->

`
