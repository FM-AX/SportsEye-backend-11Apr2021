//SEO V1.3 

module.exports = `
<h3>SITE SCORECARD: {SITE_NAME}</h3>
<h3>{SCORECARD_DATE}</h3>
<div class="standard-popup"><div class="scorecard">
<h3>PRIORITY INTERVENTION 1</h3><div class="kpis"><h3 class="kpi-heading">CATEGORY OF CHANGE</h3>
<div class="kpi-list"><div class="status {SCORECARD_P1_CATEGORY_1}"></div><div class="kpi-single">Facility specification change (capex)</div>
<div class="status {SCORECARD_P1_CATEGORY_2}"></div><div class="kpi-single">Program timetable change</div>
<div class="status {SCORECARD_P1_CATEGORY_3}"></div><div class="kpi-single">Pricing change</div>
<div class="status {SCORECARD_P1_CATEGORY_4}"></div><div class="kpi-single">Operational change</div></div></div>
<div class="action-table"><div class="table-headings"><h3 class="table-column-heading">Action</h3><h3 class="table-column-heading">Additional Income Gained</h3></div>
<div class="table-row"><div class="table-row-cell">
<b>{SCORECARD_P1_ACTION}</b><br>Members benefitting: {SCORECARD_P1_MEMBERS}<br>Prospects benefiting (Unmet demand): {SCORECARD_P1_PROSPECTS}</div><div class="table-row-cell"><br>Members: $ {SCORECARD_P1_MEMBERS_VALUE}<br>Prospects: $ <!-- -->{SCORECARD_P1_PROSPECTS_VALUE}</div>
</div></div></div><div class="scorecard"><h3>PRIORITY INTERVENTION 2</h3><div class="kpis"><h3 class="kpi-heading">CATEGORY OF CHANGE</h3><div class="kpi-list"><div class="status {SCORECARD_P2_CATEGORY_1}"></div><div class="kpi-single">Facility specification change (capex)</div><div class="status {SCORECARD_P2_CATEGORY_2}"></div><div class="kpi-single">Program timetable change</div><div class="status {SCORECARD_P2_CATEGORY_3}"></div><div class="kpi-single">Pricing change</div><div class="status {SCORECARD_P2_CATEGORY_4}"></div><div class="kpi-single">Operational change</div></div></div><div class="action-table"><div class="table-headings"><h3 class="table-column-heading">Action</h3><h3 class="table-column-heading">Additional Income Gained</h3></div><div class="table-row"><div class="table-row-cell"><b>{SCORECARD_P2_ACTION}</b><br>Members benefitting: {SCORECARD_P2_MEMBERS}<br>Prospects benefiting (Unmet demand): {SCORECARD_P2_PROSPECTS}</div><div class="table-row-cell"><br>Members: $ {SCORECARD_P2_MEMBERS_VALUE}<br>Prospects: $ <!-- -->{SCORECARD_P2_PROSPECTS_VALUE}</div></div></div></div><div class="scorecard"><h3>PRIORITY INTERVENTION 3</h3><div class="kpis"><h3 class="kpi-heading">CATEGORY OF CHANGE</h3><div class="kpi-list"><div class="status {SCORECARD_P3_CATEGORY_1}"></div><div class="kpi-single">Facility specification change (capex)</div><div class="status {SCORECARD_P3_CATEGORY_2}"></div><div class="kpi-single">Program timetable change</div><div class="status {SCORECARD_P3_CATEGORY_3}"></div><div class="kpi-single">Pricing change</div><div class="status {SCORECARD_P3_CATEGORY_4}"></div><div class="kpi-single">Operational change</div></div></div><div class="action-table"><div class="table-headings"><h3 class="table-column-heading">Action</h3><h3 class="table-column-heading">Additional Income Gained</h3></div><div class="table-row"><div class="table-row-cell"><b>{SCORECARD_P3_ACTION}</b><br>Members benefitting: {SCORECARD_P3_MEMBERS}<br>Prospects benefiting (Unmet demand): {SCORECARD_P3_PROSPECTS}</div><div class="table-row-cell"><br>Members: $ {SCORECARD_P3_MEMBERS_VALUE}<br>Prospects: $ <!-- -->{SCORECARD_P3_PROSPECTS_VALUE}</div></div></div></div>


`
