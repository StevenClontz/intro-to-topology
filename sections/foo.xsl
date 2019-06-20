<?xml version='1.0'?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
  xmlns:xml="http://www.w3.org/XML/1998/namespace"
>
<xsl:output method="xml"/>

<xsl:template match="*">
  <xsl:copy><xsl:copy-of select="@*"/><xsl:apply-templates/></xsl:copy>
</xsl:template>
<xsl:template match="*/theorem">
      <xsl:copy><xsl:copy-of select="@*"/><statement>
        <xsl:apply-templates/>
      </statement></xsl:copy>
</xsl:template>

</xsl:stylesheet>
