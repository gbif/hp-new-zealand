---
title:  "Summarised findings from councils piloting uploading biodiversity data to the Global Biodiversity Information Facility (GBIF) in 2024"
date:   2025-09-28 15:20:00 +0100
categories: ["local government", "data mobilisation", "Ministry for the Environment"]
lang-ref: MfE-pilot
background: assets/images/posts/2025-09-28-MfE-pilot-map-plus.jpg
imageLicense: Map - occurrence data from GBIF-NZ portal, 2025. |
  Gorse (Ulex europaeus), © Landcare Research 2012 | South Island robin (Petroica australis), © Aaron Wilton 2024. | Modified wetland margin, © Aaron Wilton 2020
---

Across New Zealand, regional and unitary councils collect extensive biodiversity and biosecurity data. Sharing this data through GBIF could improve ease of access and greatly contribute to a fuller national picture of biodiversity in New Zealand.

The GBIF New Zealand Node recognised the regional sector as a key gap for GBIF and made it a strategic focus. Subsequently a Ministry for Business, Innovation and Employment (MBIE) Envirolink report [<sup>1</sup>](https://www.envirolink.govt.nz/assets/Envirolink/2340-ORC006-Potential-for-regional-councils-to-use-GBIF-to-access-and-share-species-occurrence-data.pdf)[<sup>, 2</sup>](https://www.envirolink.govt.nz/news-and-events/using-gbif-for-biodiversity-and-biosecurity-management/), released in November 2023, highlighted the interest of councils in this space, and the likely feasibility of uploading local government biodiversity datasets to GBIF.

To build on this momentum, the Ministry for the Environment (MfE) funded five councils to pilot uploading biodiversity data they hold to the Global Biodiversity Information Facility (GBIF)[<sup>3</sup>](https://www.gbif.org.nz/post/2024/mfe-local-government-pilot/). The pilot aimed to both improve local government’s biodiversity data management and facilitate broader access and use of their publicly funded biodiversity data.

This included a variety of biodiversity data types. The [table below](#table1) shows for each council the technical lead(s), data type, and the link to the published data in GBIF.

##### Links
<sup>1</sup> : [Potential for regional councils to use GBIF to access and share species occurrence data](https://www.envirolink.govt.nz/assets/Envirolink/2340-ORC006-Potential-for-regional-councils-to-use-GBIF-to-access-and-share-species-occurrence-data.pdf)

<sup>2</sup> : [Using GBIF for biodiversity and biosecurity management](https://www.envirolink.govt.nz/news-and-events/using-gbif-for-biodiversity-and-biosecurity-management/)

<sup>3</sup> : [Ministry for the Environment Funds Pilot Project to Upload Local Government Data to GBIF](https://www.gbif.org.nz/post/2024/mfe-local-government-pilot/)

<figure>
    <img src="{{site.url}}/assets/images/posts/2025-09-28-MfE-Pilot-Maps.png"/>
    <figcaption>Map showing the distribution of species occurrence records that were mobilised by councils as part of this pilot. (Sourced from GBIF-NZ portal, 28 Sep 2025.)</figcaption>
</figure>

## Process
The following are the major steps that were followed during this pilot:
- Regional/unitary council participation was invited by MfE.
- Council participants registered as users on GBIF (if not already registered) then registered their council as a data publisher.
- Each participant was sent a unique token by GBIF. This publishing token is required to enable a data holder to publish data to the GBIF network.
- The GBIF-NZ Node Manager registered the participants as users on the GBIF-NZ instance of [Integrated Publishing Toolkit (IPT)](https://www.gbif.org/ipt), and once received, registered the publishing token for their council.
- Council participants began extracting and preparing of their data and metadata.
- Data sets were published to GBIF by the participant.

## Observations and learnings
Council participants were quickly able to start the process of mapping their data to the Darwin Core standard and using the IPT tool to create metadata. For most participants this entailed three sessions with the GBIF Node Manager (initial session, clarification session, review session).

#### It's relatively easy…
Setting up accounts and signing up is the trickiest part. Publishing data sets to GBIF was described as “quite simple and intuitive” and “low effort and low skill process”.

However, it is still additional work and needs the internal support from senior staff within councils to enable technical staff to prioritise this.

#### The format of your data matters…
The format of the council data determined how easy it was for participants to prepare their data for publishing to GBIF.

GBIF uses data standards such as [Darwin Core](https://dwc.tdwg.org/) to ensure consistency of data and enable federation. Using these data standards for field definitions, species occurrence data are structured in one of two ways for publication to GBIF depending on the nature of the data - as an Occurrence Core (more suited to ad hoc observations) or as a Sampling Event Core (recommended for structured survey and monitoring data). For this pilot both approaches were used for the council data, however most were structured as Occurrence Core data sets as this arrangement was closer to how the data are held within council systems.

Most New Zealand databases do not have standardised mappings to Darwin Core or - where appropriate - incorporate Darwin Core fields (e.g. The Integrated Regional Information System (IRIS) databases do not use Darwin Core). As a result additional effort was required by participants to ensure that each of the council data sets aligned correctly with the Darwin Core standard. In addition challenges were encountered due to the storage of data using common names instead of scientific names, the lack of persistent unique identifiers within council systems, and the lack of spatial co-ordinates.

All pilots found work arounds to manage these challenges in their existing data (e.g. translating common names using a look up sheet in the excel data file, manual transformations of data). While these work arounds are useful for existing data, there were suggestions for how to avoid these in the future to facilitate easier upload of data into GBIF.  

These suggestions included recommendations that councils should collect and store the data in a format that is easy to publish to GBIF and, whenever appropriate, should utilise global data standards, such as Darwin Core. This would have wider benefits to increasing consistency in data across the sector, and making data sharing easier. Additional recommendations from council pilots included that this compatability should be considered in the development of IRIS Next Gen, and contracts issued by councils for biodata collection should require return of all data (not just summaries) in a GBIF friendly format.

## Summary of outcomes from the pilots
✓ All of the data sets were able to be mapped to the Darwin Core and related standards.

✓ Nine data sets were published to GBIF by the council participants, adding 53,716 species occurrence records to GBIF for New Zealand.

✓ Five regional councils are now registered as data publishers in the GBIF network.

<figure>
    <img src="{{site.url}}/assets/images/posts/2025-09-28-MfE-Pilot-record.png"/>
    <figcaption>Partial details of a record from Taranaki Regional Council data. (Sourced from GBIF-NZ portal, 28 Sep 2025.)</figcaption>
</figure>

## Acknowledgements of Funders and Participants

These pilots were funded by the Ministry for the Environment (co-ordinated by Fiona Hodge), with support from the GBIF New Zealand Node (Meredith McKay and Aaron Wilton). The pilots built off the Envirolink report led by councils. Advice was also provided by MPI, DOC, Predator Free 2050 and the Aotearoa Environmental Monitoring Consortium.

Five councils voluntarily participated in the pilots, and contributed time and energy to the project. We especially thank the council staff who took on this project on top of their ongoing regular workloads: Miles Burford, Philip Cochrane, Todd Dennis, Halema Jamieson, Scott Jarvie, Kerry Lukies, Craig Simpkins.

## MfE Contact
Fiona Hodge, Senior Advisor - Science | Kaitohutohu Matua - Pūtaiao

Report reference: D99AC7AD-B8C6-4A82-AF6E-79BCCFFD24DA

## <a name="table1">Summary of pilot data</a>

The table below shows for each council the technical lead(s), data type, and the link to the published data in GBIF.

<table>
	<thead>
		<tr>	
			<th>Council</th>
			<th>Leads</th>
			<th>Data type</th>
			<th>GBIF Dataset</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Auckland Council</td>
			<td>Craig Simpkins</td>
			<td>Regional Park Pest Plants 2005-2024</td>
			<td><a href="https://www.gbif.org/dataset/033e5e07-f835-4f59-a0e4-6dc40e2c1ca7" target="_blank">033e5e07-f835-4f59-a0e4-6dc40e2c1ca7</a></td>
		</tr>
		<tr>
			<td rowspan="2">Environment Canterbury</td>
			<td rowspan="2">Miles Burford</td>
			<td>Wetland plant occurrences from public land</td>
			<td>
				<p><a href="https://www.gbif.org/dataset/4c9ded35-9cd3-44e7-9213-378ce6586f47" target="_blank">4c9ded35-9cd3-44e7-9213-378ce6586f47</a></p>
				<p><a href="https://www.gbif.org/dataset/9874ece7-7646-45a9-89d3-446369d2fdab" target="_blank">9874ece7-7646-45a9-89d3-446369d2fdab</a></p>
			</td>
		</tr>
		<tr>
			<td>Biosecurity Weed and Pest Data on Public Land 2003-2024</td>
			<td>
			<a href="https://www.gbif.org/dataset/d4175b36-059a-445b-bc1d-51b1bd084446" target="_blank">d4175b36-059a-445b-bc1d-51b1bd084446</a></td>
		</tr>
		<tr>
			<td>Nelson City Council</td>
			<td>Philip Cochrane & Todd Dennis</td>
			<td>Avian point data in Nelson reserves</td>
			<td><a href="https://www.gbif.org/dataset/a5f74b25-e5c4-46a7-8676-90dc712ea943" target="_blank">a5f74b25-e5c4-46a7-8676-90dc712ea943</a></td>
		</tr>
		<tr>
			<td rowspan="3">Otago Regional Council</td>
			<td rowspan="3">Scott Jarvie</td>
			<td>Macroinvertebrate Community Index (MCI) data for state of environment 2023-2024</td>
			<td><a href="https://www.gbif.org/dataset/f3b8e96c-718e-4c63-af29-9ad69ae4f8ec" target="_blank">f3b8e96c-718e-4c63-af29-9ad69ae4f8ec</a></td>
		</tr>
		<tr>
			<td>Algae samples from state of the environment monitoring 2023</td>
			<td><a href="https://www.gbif.org/dataset/1b4c2102-462f-4eb1-a8a3-a2f344555e6e" target="_blank">1b4c2102-462f-4eb1-a8a3-a2f344555e6e</a></td>
		</tr>
		<tr>
			<td>Lake Submerged Plant Index 2020-24</td>
			<td><a href="https://www.gbif.org/dataset/5c00a815-27ad-4ae6-9ed8-73344f796e27" target="_blank">5c00a815-27ad-4ae6-9ed8-73344f796e27</a></td>
		</tr>
		<tr>
			<td>Taranaki Regional Council</td>
			<td>Kerry Lukies & Halema Jamieson</td>
			<td>Pukekura Park and Brooklands Key Native Ecosystem species occurrence data 2016-23</td>
			<td><a href="https://www.gbif.org/dataset/2ee6b102-865b-4e7a-8c05-1454300c57af" target="_blank">2ee6b102-865b-4e7a-8c05-1454300c57af</a></td>
		</tr>
	</tbody>
</table>
