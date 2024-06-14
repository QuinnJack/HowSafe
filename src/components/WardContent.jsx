import { BarChart } from "@tremor/react";
import { AreaChart } from "@tremor/react";
import { FunnelChart } from "@tremor/react";
import { LineChart } from "@tremor/react";
import React from "react";
import Ward from "./Ward";
import "leaflet/dist/leaflet.css";
import Heatmap from "./Heatmap";
import Choropleth from "./Choropleth";
const wardContent = {
  Testing: (
    <div>
      {" "}
      <Choropleth />{" "}
    </div>
  ),
  Orléans: (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Orléans East-Cumberland</span> is{" "}
          <span className="highlight">1.98 times</span> safer than the average
          ward with <span className="highlight">1980</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft of Motor Vehicle</span>. The ward
          was expected to have{" "}
          <span className="font-bold text-[#00434d]">36.14</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">130</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">305.65</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">136</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">3.2% decrease</span> in
          crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">17.8%</span> while
          non-violent crime is down{" "}
          <span className="font-bold text-[#00434d]">8.7%</span>.
        </p>
        <br></br>
        <Heatmap
          initialLatitude={45.4699}
          initialLongitude={-75.5106}
          initialZoom={11.5}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  Innes: (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Orléans West-Innes</span> is{" "}
          <span className="highlight">1.48 times</span> safer than the average
          ward with <span className="highlight">2446</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes perexclamation 100,000
          residents.exclamation
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft of Motor Vehicle</span>. The ward
          was expected to have{" "}
          <span className="font-bold text-[#00434d]">38.76</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">84</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">327.75</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">216</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">8.8% decrease</span> in
          crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">6.8%</span> while
          non-violent crime is down{" "}
          <span className="font-bold text-[#00434d]">13.0%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Innes"}
          initialLatitude={45.441667}
          initialLongitude={-75.546029}
          initialZoom={11.5}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  "Barrhaven West": (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Barrhaven West</span> is{" "}
          <span className="highlight">2.01 times</span> safer than the average
          ward with <span className="highlight">1803</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft of Motor Vehicle</span>. The ward
          was expected to have{" "}
          <span className="font-bold text-[#00434d]">63.23</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">146</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">534.75</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">457</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">
            20.7% increase
          </span>{" "}
          in crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">7.9%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">24.2%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Barhaven West"}
          initialLatitude={45.26768}
          initialLongitude={-75.758254}
          initialZoom={11.5}
        />
        <br /> <Ward></Ward>
      </div>
    </div>
  ),
  "Kanata North": (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Kanata North</span> is{" "}
          <span className="highlight">2.47 times</span> safer than the average
          ward with <span className="highlight">1464</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Mischief</span>. The ward was expected to
          have <span className="highlight">64.61</span> number of incidents, but
          actually had <span className="highlight">86</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">322.36</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">292</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">
            13.8% increase
          </span>{" "}
          in crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">6.3%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">15.6%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Kanata North"}
          initialLatitude={45.310041}
          initialLongitude={-75.90001}
          initialZoom={11.5}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  "West Carleton-March": (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">West Carleton-March</span> is{" "}
          <span className="highlight">4.49 times</span> safer than the average
          ward with <span className="highlight">804</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Break and Enter</span>. The ward was
          expected to have{" "}
          <span className="font-bold text-[#00434d]">13.60</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">33</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">93.80</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">40</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">4.3% decrease</span> in
          crime rate from 2021 to 2022. Violent crime is down{" "}
          <span className="font-bold text-[#00434d]">15.2%</span> while
          non-violent crime is also down{" "}
          <span className="font-bold text-[#00434d]">0.8%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"West Carleton March"}
          initialLatitude={45.295164}
          initialLongitude={-76.065991}
          initialZoom={11}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  Stittsville: (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Stittsville</span> is{" "}
          <span className="highlight">3.04 times</span> safer than the average
          ward with <span className="highlight">1191</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Mischief</span>. The ward was expected to
          have <span className="highlight">61.80</span> number of incidents, but
          actually had <span className="highlight">122</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">308.34</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">191</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">
            19.9% increase
          </span>{" "}
          in crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">1.3%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">25.3%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Stittsville"}
          initialLatitude={45.26768}
          initialLongitude={-75.924727}
          initialZoom={12}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  Bay: (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Bay</span> is{" "}
          <span className="highlight">1.11 times</span> more dangerous than the
          average ward with <span className="highlight">3264</span> crimes per
          100,000 residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expected to have{" "}
          <span className="font-bold text-[#00434d]">1009.66</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">1077</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Mischief</span>. The ward was expecting{" "}
          <span className="highlight">202.38</span> incidents, but only had{" "}
          <span className="highlight">156</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">5.1% increase</span> in
          crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">9.6%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">3.8%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Bay"}
          initialLatitude={45.364575}
          initialLongitude={-75.860261}
          initialZoom={11}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  College: (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">College</span> is{" "}
          <span className="highlight">1.02 times</span> more dangerous than the
          average ward with <span className="highlight">3679</span> crimes per
          100,000 residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expected to have{" "}
          <span className="font-bold text-[#00434d]">966.00</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">1068</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Break and Enter</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">140.04</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">107</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">1.7% increase</span> in
          crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">2.2%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">1.5%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"College"}
          initialLatitude={45.324244}
          initialLongitude={-75.811906}
          initialZoom={11}
        />
        <br /> <Ward></Ward>
      </div>
    </div>
  ),
  "Knoxdale-Merivale": (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Knoxdale-Merivale</span> is{" "}
          <span className="highlight">1.27 times</span> safer than the average
          ward with <span className="highlight">2847</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft of Motor Vehicle</span>. The ward
          was expected to have{" "}
          <span className="font-bold text-[#00434d]">72.35</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">88</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">611.83</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">589</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">
            11.8% increase
          </span>{" "}
          in crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">12.9%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">11.5%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Knoxdale-Merivale"}
          initialLatitude={45.320033}
          initialLongitude={-75.745771}
          initialZoom={11}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  "Gloucester-Southgate": (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Gloucester-Southgate</span> is{" "}
          <span className="highlight">1.16 times</span> safer than the average
          ward with <span className="highlight">3120</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft of Motor Vehicle</span>. The ward
          was expected to have{" "}
          <span className="font-bold text-[#00434d]">80.76</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">147</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">682.99</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">520</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">
            15.4% increase
          </span>{" "}
          in crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">13.4%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">15.9%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Gloucester-Southgate"}
          initialLatitude={45.35625}
          initialLongitude={-75.612272}
          initialZoom={11}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  "Beacon Hill-Cyrville": (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Beacon Hill-Cyrville</span> is{" "}
          <span className="highlight">1.78 times</span> more dangerous than the
          average ward with <span className="highlight">6039</span> crimes per
          100,000 residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expected to have{" "}
          <span className="font-bold text-[#00434d]">1066.26</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">1277</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Assaults</span>. The ward was expecting{" "}
          <span className="highlight">231.18</span> incidents, but only had{" "}
          <span className="highlight">152</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">3.1% increase</span> in
          crime rate from 2021 to 2022. Violent crime is down{" "}
          <span className="font-bold text-[#00434d]">5.7%</span> while
          non-violent crime is up{" "}
          <span className="font-bold text-[#00434d]">5.1%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Beacon Hill-Cyrville"}
          initialLatitude={45.440932}
          initialLongitude={-75.606943}
          initialZoom={12}
        />
        <br /> <Ward></Ward>
      </div>
    </div>
  ),
  "Rideau-Vanier": (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Rideau-Vanier</span> is{" "}
          <span className="highlight">3.07 times</span> more dangerous than the
          average ward with <span className="highlight">11156</span> crimes per
          100,000 residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expected to have{" "}
          <span className="font-bold text-[#00434d]">3309.82</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">3717</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft of Motor Vehicle</span>. The ward
          was expecting <span className="font-bold text-[#00434d]">391.39</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">111</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">3.6% decrease</span> in
          crime rate from 2021 to 2022. Violent crime is down{" "}
          <span className="font-bold text-[#00434d]">3.9%</span> while
          non-violent crime is down{" "}
          <span className="font-bold text-[#00434d]">3.6%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Rideau Vanier"}
          initialLatitude={45.431779}
          initialLongitude={-75.66863}
          initialZoom={13}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  "Rideau-Rockcliffe": (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Rideau-Rockcliffe</span> is{" "}
          <span className="highlight">1.56 times</span> more dangerous than the
          average ward with <span className="highlight">5733</span> crimes per
          100,000 residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Assaults</span>. The ward was expected to
          have <span className="highlight">207.10</span> number of incidents,
          but actually had <span className="font-bold text-[#00434d]">257</span>
          . The crime occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">955.21</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">920</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">0.5% decrease</span> in
          crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">3.2%</span> while
          non-violent crime is down{" "}
          <span className="font-bold text-[#00434d]">1.6%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Rideau-Rockcliffe"}
          initialLatitude={45.444736}
          initialLongitude={-75.62132}
          initialZoom={12}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  Somerset: (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Somerset</span> is{" "}
          <span className="highlight">3.53 times</span> more dangerous than the
          average ward with <span className="highlight">12537</span> crimes per
          100,000 residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Break and Enter</span>. The ward was
          expected to have{" "}
          <span className="font-bold text-[#00434d]">267.02</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">343</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft of Motor Vehicle</span>. The ward
          was expecting <span className="font-bold text-[#00434d]">217.82</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">60</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">
            22.4% increase
          </span>{" "}
          in crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">17.3%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">23.2%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Somerset"}
          initialLatitude={45.414454}
          initialLongitude={-75.705237}
          initialZoom={13}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  Kitchissippi: (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Kitchissippi</span> is{" "}
          <span className="highlight">1.21 times</span> more dangerous than the
          average ward with <span className="highlight">4401</span> crimes per
          100,000 residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expected to have{" "}
          <span className="font-bold text-[#00434d]">1088.90</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">1333</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Mischief</span>. The ward was expecting{" "}
          <span className="highlight">218.26</span> incidents, but only had{" "}
          <span className="highlight">138</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">
            11.3% increase
          </span>{" "}
          in crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">17.0%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">10.2%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Kitchissippi"}
          initialLatitude={45.396218}
          initialLongitude={-75.74289}
          initialZoom={12}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  River: (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">River</span> is{" "}
          <span className="highlight">1.35 times</span> safer than the average
          ward with <span className="highlight">2684</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Assaults</span>. The ward was expected to
          have <span className="highlight">142.70</span> number of incidents,
          but actually had <span className="font-bold text-[#00434d]">184</span>
          . The crime occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">658.19</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">541</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">1.3% increase</span> in
          crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">4.0%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">0.3%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"River"}
          initialLatitude={45.361738}
          initialLongitude={-75.695119}
          initialZoom={12}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  Capital: (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Capital</span> is{" "}
          <span className="highlight">1.32 times</span> more dangerous than the
          average ward with <span className="highlight">4513</span> crimes per
          100,000 residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expected to have{" "}
          <span className="font-bold text-[#00434d]">1205.33</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">1518</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Assaults</span>. The ward was expecting{" "}
          <span className="highlight">261.33</span> incidents, but only had{" "}
          <span className="highlight">161</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">
            11.0% increase
          </span>{" "}
          in crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">1.6%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">12.6%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Capital"}
          initialLatitude={45.396484}
          initialLongitude={-75.682128}
          initialZoom={13}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  "Alta Vista": (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Alta Vista</span> is{" "}
          <span className="highlight">1.37 times</span> more dangerous than the
          average ward with <span className="highlight">4884</span> crimes per
          100,000 residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expected to have{" "}
          <span className="font-bold text-[#00434d]">973.00</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">1002</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Mischief</span>. The ward was expecting{" "}
          <span className="highlight">195.03</span> incidents, but only had{" "}
          <span className="highlight">180</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">
            12.0% increase
          </span>{" "}
          in crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">7.2%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">13.6%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Alta Vista"}
          initialLatitude={45.397783}
          initialLongitude={-75.638694}
          initialZoom={12}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  "Orléans South-Navan": (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Orléans South-Navan</span> is{" "}
          <span className="highlight">1.40 times</span> safer than the average
          ward with <span className="highlight">2590</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft of Motor Vehicle</span>. The ward
          was expected to have{" "}
          <span className="font-bold text-[#00434d]">61.51</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">137</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Break and Enter</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">75.41</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">35</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">1.0% increase</span> in
          crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">16.4%</span> while
          non-violent crime is down{" "}
          <span className="font-bold text-[#00434d]">2.0%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Orleans South Navan"}
          initialLatitude={45.414748}
          initialLongitude={-75.402175}
          initialZoom={11}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  Osgoode: (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Osgoode</span> is{" "}
          <span className="highlight">2.74 times</span> safer than the average
          ward with <span className="highlight">1325</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Break and Enter</span>. The ward was
          expected to have{" "}
          <span className="font-bold text-[#00434d]">30.32</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">65</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">209.15</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">116</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">
            14.9% increase
          </span>{" "}
          in crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">18.0%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">14.2%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Osgoode"}
          initialLatitude={45.223023}
          initialLongitude={-75.527372}
          initialZoom={10}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  "Rideau-Jock": (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Rideau-Jock</span> is{" "}
          <span className="highlight">3.52 times</span> safer than the average
          ward with <span className="highlight">1027</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Break and Enter</span>. The ward was
          expected to have{" "}
          <span className="font-bold text-[#00434d]">24.38</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">54</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">168.19</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">100</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">4.7% increase</span> in
          crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">13.5%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">2.3%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Rideau Jock"}
          initialLatitude={45.140982}
          initialLongitude={-75.823071}
          initialZoom={10}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  "Riverside South-Findlay Creek": (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Riverside South-Findlay Creek</span> is{" "}
          <span className="highlight">2.19 times</span> safer than the average
          ward with <span className="highlight">1647</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft of Motor Vehicle</span>. The ward
          was expected to have{" "}
          <span className="font-bold text-[#00434d]">32.57</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">108</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">275.46</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">197</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">
            13.9% increase
          </span>{" "}
          in crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">19.7%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">12.8 %</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Riverside"}
          initialLatitude={45.286684}
          initialLongitude={-75.673139}
          initialZoom={11}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  "Kanata South": (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Kanata South</span> is{" "}
          <span className="highlight">2.56 times</span> safer than the average
          ward with <span className="highlight">1412</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Mischief</span>. The ward was expected to
          have <span className="highlight">69.69</span> number of incidents, but
          actually had <span className="highlight">91</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">347.69</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">299</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">6.7% decrease</span> in
          crime rate from 2021 to 2022. Violent crime is down{" "}
          <span className="font-bold text-[#00434d]">11.1%</span> while
          non-violent crime is also down{" "}
          <span className="font-bold text-[#00434d]">5.5%</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Kanata South"}
          initialLatitude={45.292733}
          initialLongitude={-75.875165}
          initialZoom={11}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  "Barrhaven East": (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <span className="highlight">Barrhaven East</span> is{" "}
          <span className="highlight">2.10 times</span> safer than the average
          ward with <span className="highlight">1735</span> crimes per 100,000
          residents. The average ward has{" "}
          <span className="highlight">3619</span> crimes per 100,000 residents.
        </p>
        <br />
        <p>
          The crime committed more often relative to the rest of the city is{" "}
          <span className="highlight">Theft of Motor Vehicle</span>. The ward
          was expected to have{" "}
          <span className="font-bold text-[#00434d]">35.19</span> number of
          incidents, but actually had{" "}
          <span className="font-bold text-[#00434d]">134</span>. The crime
          occurring less often than projected is{" "}
          <span className="highlight">Theft $5000 and Under</span>. The ward was
          expecting <span className="font-bold text-[#00434d]">297.56</span>{" "}
          incidents, but only had{" "}
          <span className="font-bold text-[#00434d]">143</span>.
        </p>
        <br />
        <p>
          {" "}
          The ward has had a <span className="highlight">
            13.9% increase
          </span>{" "}
          in crime rate from 2021 to 2022. Violent crime is up{" "}
          <span className="font-bold text-[#00434d]">19.7%</span> while
          non-violent crime is also up{" "}
          <span className="font-bold text-[#00434d]">12.8 %</span>.
        </p>
        <br />
        <Heatmap
          keyProp={"Barhavven East"}
          initialLatitude={45.26768}
          initialLongitude={-75.720254}
          initialZoom={11}
        />
        <br />
        <Ward></Ward>
      </div>
    </div>
  ),
  Ottawa: (
    <div>
      <div className="text-[#052E41] text-sm font-light">
        <p>
          The City of Ottawa has committed to enhancing the safety and
          well-being of its diverse communities. This project aims to visualize
          the data that the city has released from 2005 to 2022 to illustrate
          how the safety of Ottawa has evolved, both within individual wards,
          across the city and within Canada.
        </p>
      </div>

      <div className="text-[#052E41] text-sm font-light">
        <br />
        <p>
          When examining the safety of Ottawa neighborhoods, it is clear that
          some areas experience significantly higher crime rates than others.
          The Byward Market and the encompassing Rideau-Vanier ward are{" "}
          <span className="highlight">3 times</span> more prone to crime than
          the average ward.
        </p>
      </div>
      <br />
      <h3 className="text-lg font-medium text-[#052E41]  ">
        Crimes per 100,000 residents in individual wards
      </h3>
      <BarChart
        className="mt-6 custom-bar-chart"
        data={[
          { name: "Somerset", "Crimes per 100,000 residents": 11624 },
          { name: "Rideau-Vanier", "Crimes per 100,000 residents": 10125 },
          {
            name: "Beacon Hill Cyrville",
            "Crimes per 100,000 residents": 5871,
          },
          { name: "Rideau-Rockcliffe", "Crimes per 100,000 residents": 5147 },
          { name: "Alta Vista", "Crimes per 100,000 residents": 4507 },
          { name: "Capital", "Crimes per 100,000 residents": 4347 },
          { name: "Kitchissippi", "Crimes per 100,000 residents": 3977 },
          { name: "Bay", "Crimes per 100,000 residents": 3674 },
          { name: "College", "Crimes per 100,000 residents": 3358 },
          {
            name: "Gloucester-Southgate",
            "Crimes per 100,000 residents": 2838,
          },
          { name: "Knoxdale Merivale", "Crimes per 100,000 residents": 2604 },
          { name: "River", "Crimes per 100,000 residents": 2450 },
          { name: "Innes", "Crimes per 100,000 residents": 2231 },
          { name: "Cumberland", "Crimes per 100,000 residents": 1739 },
          { name: "Orléans", "Crimes per 100,000 residents": 1661 },
          { name: "Barrhaven West", "Crimes per 100,000 residents": 1640 },
          {
            name: "     Rideau-Goulbourn",
            "Crimes per 100,000 residents": 1433,
          },
          { name: "Kanata North", "Crimes per 100,000 residents": 1335 },
          { name: "Kanata South", "Crimes per 100,000 residents": 1285 },
          { name: "Osgoode", "Crimes per 100,000 residents": 1203 },
          { name: "Stittsville", "Crimes per 100,000 residents": 1083 },
          { name: "Rideau-Jock", "Crimes per 100,000 residents": 935 },
          {
            name: "West Carleton-March",
            "Crimes per 100,000 residents": 734,
          },
        ]}
        index="name"
        categories={["Crimes per 100,000 residents"]}
        colors={["cyan-900"]}
        intervalSize={0}
        tickGap={0}
        valueFormatter={(number) =>
          Intl.NumberFormat("us").format(number).toString()
        }
        yAxisWidth={50}
        allowDecimals={true}
        showAnimation={true}
        showLegend={false}
        rotateLabelX={{
          angle: 270,
          verticalShift: 65,
          xAxisHeight: 140,
          textAnchor: "middle",
        }}
      />

      <br />
      <div className="text-[#052E41] text-sm font-light">
        <p>
          Examining crime data by intersection reveals a clearer picture of
          high-risk areas. The average number of crimes per intersection is
          around seven. The most dangerous intersection, Rideau / Nelson, is{" "}
          <span className="highlight">130 times</span> more dangerous than
          average. This location, home to the Sandy Hill Community Health
          Centre, operated as a supervised safe injection site from 2018 until
          the service was cancelled in March 2024.
        </p>
      </div>
      <br />

      <h3 className="text-lg font-medium text-[#052E41]  ">
        Number of Crimes per Intersection
      </h3>
      <BarChart
        className="mt-6 custom-bar-chart"
        data={[
          { name: "Nelson / Rideau", "Number of crimes": 933 },
          { name: "William / Rideau", "Number of crimes": 841 },
          { name: "City Park / Ogilvie", "Number of crimes": 653 },
          { name: "Marguerite / Washington", "Number of crimes": 581 },
          { name: "Fairlawn / Fox Cres", "Number of crimes": 479 },
          { name: "Clifton / Richmond", "Number of crimes": 465 },
          { name: "Bank / McLeod", "Number of crimes": 458 },
          { name: "Metcalfe / Pretoria", "Number of crimes": 420 },
          { name: "Bank / Maclaren", "Number of crimes": 393 },
          { name: "Baseline / College Sqr", "Number of crimes": 387 },
        ]}
        index="name"
        categories={["Number of crimes"]}
        colors={["cyan-900"]}
        layout="vertical"
        showAnimation={true}
        showLegend={false}
        valueFormatter={(number) =>
          Intl.NumberFormat("us").format(number).toString()
        }
        yAxisWidth={175}
      />
      <div className="text-[#052E41] text-sm font-light">
        <p>
          Below, the heatmap shows the shows each reported incident and their
          approximate location throughout the city. The map mostly correlates
          with population density, but notice some outliers at the
          Ottawa-Carleton Detention Centre, major highway intersections, some
          LCBOs, and the Ottawa International Airport.
        </p>
      </div>
      <br />
      <Heatmap
        initialLatitude={45.3851}
        initialLongitude={-75.6903}
        initialZoom={10}
      />
      <div className="text-[#052E41] text-sm font-light">
        <p>
          <br />
          Socio-economic Status (SES) in Ottawa is rated by the Ottawa
          Neighbourhood Study, considering factors like income, employment, and
          education. The least advantaged 20% of neighborhoods (SES 5) have over
          three times the crime rate compared to the most advantaged (SES 1).
          However, the lowest crime rates are found not in the SES 1
          neighborhoods but in the second SES quintile.
        </p>
      </div>
      <br />
      <h3 className="text-lg font-medium text-[#052E41]  ">
        Crime Rate by Socioeconomic Status
      </h3>
      <BarChart
        className="mt-6 custom-bar-chart"
        data={[
          { name: "SES 1", "Crime Rate": 0.32 },
          { name: "SES 2", "Crime Rate": 0.26 },
          { name: "SES 3", "Crime Rate": 0.55 },
          { name: "SES 4", "Crime Rate": 0.8 },
          { name: "SES 5", "Crime Rate": 1.1 },
        ]}
        index="name"
        categories={["Crime Rate"]}
        colors={["cyan-900"]}
        showLegend={false}
        showAnimation={true}
        valueFormatter={(number) =>
          Intl.NumberFormat("us", {
            style: "percent",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
            .format(number / 100)
            .toString()
        }
        yAxisWidth={80}
      />
      <div className="text-[#052E41] text-sm font-light">
        <p>
          Crime rose in Ottawa and across Canada during the COVID-19 pandemic.
          Now that the pandemic is over, crime rates are declining back to
          standard levels.
        </p>
      </div>
      <br />
      <h3 className="text-lg font-medium text-[#052E41]  ">
        Number of Crimes Per 100,000 Residents in Ottawa
      </h3>
      <br />
      <LineChart
        categories={["Ottawa"]}
        colors={[
          "cyan-900",
          "teal-800",
          "cyan-700",
          "teal-700",
          "cyan-600",
          "teal-600",
        ]}
        minValue={2000}
        maxValue={4000}
        showLegend={false}
        showAnimation={true}
        intervalType="equidistantPreserveStart"
        className="h-72"
        curveType="natural"
        data={[
          {
            year: "2010",
            Vancouver: 85.0,
            Edmonton: 103.9,
            Calgary: 72.1,
            Toronto: 64.6,
            Ottawa: 3440.84,
            Montréal: 76.1,
          },
          {
            year: "2012",
            Vancouver: 85.0,
            Edmonton: 103.9,
            Calgary: 72.1,
            Toronto: 64.6,
            Ottawa: 3490.84,
            Montréal: 76.1,
          },
          {
            year: "2014",
            Vancouver: 85.0,
            Edmonton: 103.9,
            Calgary: 72.1,
            Toronto: 64.6,
            Ottawa: 3424.84,
            Montréal: 76.1,
          },
          {
            year: "2015",
            Vancouver: 85.0,
            Edmonton: 103.9,
            Calgary: 72.1,
            Toronto: 64.6,
            Ottawa: 3494.84,
            Montréal: 76.1,
          },
          {
            year: "2017",
            Vancouver: 70.4,
            Edmonton: 107.0,
            Calgary: 73.5,
            Toronto: 71.6,
            Ottawa: 3650.71,
            Montréal: 73.7,
          },
          {
            year: "2019",
            Vancouver: 80.3,
            Edmonton: 109.1,
            Calgary: 84.5,
            Toronto: 78.1,
            Ottawa: 3690.95,
            Montréal: 76.1,
          },
          {
            year: "2020",
            Vancouver: 80.3,
            Edmonton: 109.1,
            Calgary: 84.5,
            Toronto: 78.1,
            Ottawa: 3974.95,
            Montréal: 76.1,
          },
          {
            year: "2021",
            Vancouver: 81.6,
            Edmonton: 97.5,
            Calgary: 72.3,
            Toronto: 45.5,
            Ottawa: 3701.22,
            Montréal: 55.9,
          },
          {
            year: "2022",
            Vancouver: 92.4,
            Edmonton: 100.4,
            Calgary: 75.2,
            Toronto: 51.9,
            Ottawa: 3517.15,
            Montréal: 61.4,
          },
        ]}
        index="year"
      />
      <br />
      <div className="text-[#052E41] text-sm font-light">
        <p>
          This trend is reflected across other Canadian cities. Ottawa
          consistently ranks as one of the safest major metropolitan areas in
          Canada, finishing 2022 with a similar crime severity index to 2015.
        </p>
      </div>
      <br />
      <h3 className="text-lg font-medium text-[#052E41]  ">
        Crime Severity Index Across Major Metropolitan Areas
      </h3>
      <LineChart
        categories={[
          "Vancouver",
          "Edmonton",
          "Calgary",
          "Toronto",
          "Ottawa",
          "Montréal",
        ]}
        colors={[
          "cyan-900",
          "teal-800",
          "cyan-700",
          "teal-700",
          "cyan-600",
          "teal-600",
        ]}
        minValue={40}
        maxValue={120}
        showAnimation={true}
        intervalType="equidistantPreserveStart"
        className="h-72"
        data={[
          {
            year: "2015",
            Vancouver: 85.0,
            Edmonton: 103.9,
            Calgary: 72.1,
            Toronto: 64.6,
            Ottawa: 53.7,
            Montréal: 76.1,
          },
          {
            year: "2017",
            Vancouver: 70.4,
            Edmonton: 107.0,
            Calgary: 73.5,
            Toronto: 71.6,
            Ottawa: 64.4,
            Montréal: 73.7,
          },
          {
            year: "2019",
            Vancouver: 80.3,
            Edmonton: 109.1,
            Calgary: 84.5,
            Toronto: 78.1,
            Ottawa: 68.8,
            Montréal: 76.1,
          },
          {
            year: "2021",
            Vancouver: 81.6,
            Edmonton: 97.5,
            Calgary: 72.3,
            Toronto: 45.5,
            Ottawa: 49.3,
            Montréal: 55.9,
          },
          {
            year: "2022",
            Vancouver: 92.4,
            Edmonton: 100.4,
            Calgary: 75.2,
            Toronto: 51.9,
            Ottawa: 52.9,
            Montréal: 61.4,
          },
        ]}
        index="year"
      />
    </div>
  ),
};

const WardContent = ({ selectedWard }) => {
  return <div>{wardContent[selectedWard]}</div>;
};

export default WardContent;
