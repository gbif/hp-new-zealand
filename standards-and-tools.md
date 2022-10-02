---
lang-ref: Standards and tools
title: Standards and tools
description: The most efficient way to prepare and publish data to the GBIF network is using Darwin Core-based datasets that are published through GBIF's Integrated Publishing Toolkit.  
background: /assets/images/starfish-1.jpg
imageLicense: (c) V.A. Wilton, 2021 |
  Photo by V.A. Wilton.
height: 70vh
toc: true
---

The resources below provide key links to get started and to find additional information on mobilisation biodiversity data using Darwin Core and the Integrated Publishing Toolkit.

## Data standards and formats

<table>
    <thead>
        <tr>
            <th style="width:25%">Name</th>
            <th style="width:50%">Description</th>
            <th style="width:25%">Resources</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Darwin Core (DwC)</td>
            <td>DwC provides the primary standard for mobilising biodiversity data in the GBIF network. It is used to describe the occurrence of organsims in nature as recorded by observations, specimens and samples. DwC is a standard maintained by Biodiversity Standards International (TDWG). </td>
            <td><a href="https://www.tdwg.org/standards/dwc/" target="_blank">Darwin Core Standard</a><br /><br /><a href="https://dwc.tdwg.org/terms/" target="_blank">DarwinCore Quick Reference Guide</a></td>
        </tr>
        <tr>
            <td>Darwin Core Archive (DwC-A)</td>
            <td>DwC-A is the main format used to publish biodiversity data in the GBIF network.  It is star-schema archive (ZIP) that contains a set of files that includes a metadata file, a descriptor file that defines the structure and relationship of the data files, and one or more data files in TSV and/or CSV format.</td>
            <td><a href="https://www.gbif.org/darwin-core" target="_blank">GBIF page on Darwin Core and archives.</a></td>
        </tr>
    <tr>
        <td>Ecological Metadata Language (EML)</td>
        <td>EML is used in a Darwin Core Archive to record the metadata for the published resource. EML provides a vocabulary for documenting research data.</td>
        <td><a href="https://eml.ecoinformatics.org/" target="_blank">EML Standard</a></td>
    </tr>
    <tr>
        <td>Comma Separated Values (CSV)</td>
        <td>CSV files are used for some data files within a Darwin Core Archive.  CSV is a commonly used format that uses a comma to separate values within a record, and line breaks (CRLF) to separate records.  Care must be taken when using CSV with biodiversity data as many fields may contain commas, line breaks and other characters that can result in poorly formed CSV.</td>
        <td>
            <a href="https://www.rfc-editor.org/rfc/rfc4180.html" target="_blank">IANA rfc4180</a>
            <br /><br />
            <a href="https://www.w3.org/TR/tabular-data-model" target="_blank">W3C Model for Tabular Data</a>
        </td>
    </tr>
        <tr>
            <td>Tab Separated Values (TSV)</td>
            <td>TSV files are used for some data files within a Darwin Core Archive. TSV is a commonly used format that uses the tab character to separate values within a record.  TSV is often preferred over CSV because the field separator of TSV (tab) is less likely to contained in the data than comma used by CSV.</td>
            <td>
                <a href="https://www.w3.org/TR/tabular-data-model" target="_blank">W3C Model for Tabular Data</a>
                <br /><br />
                <a href="https://www.iana.org/assignments/media-types/text/tab-separated-values" target="_blank">IANA Media Type</a>
            </td>
        </tr>
    </tbody>
</table>

## Tools and services that assist data mobilisaton

<table>
    <thead>
        <tr>
            <th style="width:25%">Name</th>
            <th style="width:25%">Purpose</th>
            <th style="width:50%">Scope</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td><a href="https://www.gbif.org/ipt" target="_blank">Integrated Publishing Toolkit (IPT)</a></td>
        <td>Mobilisation</td>
        <td>IPT is a free, open source software tool that is used to publish biodiversity datasets to the GBIF network.</td>
    </tr>
    <tr>
        <td><a href="https://www.gbif.org/tools/data-validator" target="_blank">GBIF Data Validator</a></td>
        <td>Format validation</td>
        <td>Validates a DarwinCore-Archive file.</td>
    </tr>
    <tr>
        <td>Darwin Core Archives Examples</td>
        <td>Templates for familiarisation</td>
        <td>Example spreadsheet templates for <a href="https://ipt.gbif.org/manual/en/ipt/2.5/occurrence-data#templates" target="_blank">occurrence</a>, <a href="https://ipt.gbif.org/manual/en/ipt/2.5/checklist-data#templates" target="_blank">checklist</a> and <a href="https://ipt.gbif.org/manual/en/ipt/2.5/sampling-event-data#templates" target="_blank">sampling-event</a> datasets.</td>
    </tr>
        <tr>
            <td><a href="https://www.nzor.org.nz" target="_blank">New Zealand Organisms Register (NZOR)</a></td>
            <td>Data validation</td>
            <td>A list of the names of organisms relevant to New Zealand. In addition to the website, NZOR provides a <a href="https://www.nzor.org.nz/matches" target="_blank">Matching</a> service that can be used to validate names.</td>
        </tr>
    </tbody>
</table>

## Data quality

<table>
    <thead>
        <tr>
            <th>Resource</th>
            <th>Source</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="https://www.gbif.org/document/80509/principles-of-data-quality" target="_blank">Chapman 2005 Principles of data quality.</a></td>
            <td>GBIF</td>
        </tr>
        <tr>
            <td><a href="" target="_blank">Chapman - generalising sensitive species</a></td>
            <td>GBIF</td>
        </tr>
        <tr>
            <td><a href="https://www.gbif.org/data-quality-requirements" target="_blank">Data Quality Requirements</a></td>
            <td>GBIF</td>
        </tr>
        <tr>
            <td><a href="https://www.gbif.org/data-quality-requirements-occurrences" target="_blank">Data Quality Requirements:  Occurrence datasets</a></td>
            <td>GBIF</td>
        </tr>
        <tr>
            <td><a href="https://github.com/gbif/ipt/wiki/checklistData#templates" target="_blank">Data Quality Requirements:  Checklists</a></td>
            <td>GBIF</td>
        </tr>
        <tr>
            <td><a href="https://github.com/gbif/ipt/wiki/samplingEventData#templates" target="_blank">Data Quality Requirements:  Sampling event datasets</a></td>
            <td>GBIF</td>
        </tr>
         <tr>
            <td><a href="https://www.tdwg.org/community/bdq/" target="_blank">Biodiversity Data Quality</a></td>
            <td>TDWG</td>
        </tr>
    </tbody>
</table>

