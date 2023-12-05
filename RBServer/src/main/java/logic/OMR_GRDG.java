package logic;

import java.util.Date;


public class OMR_GRDG {
	private int OMR_KEY;
	private int QUEI_NO;
	private int LSN_CD;
	private int LSN_SEQ;
	private int CMPN_CD;
	private int BSTOR_CD;
	private String EXMN_NO;
	private String SEX;
	private String BTHDAY;
	private String OMR_IMG;
	private String MARK_NO;
	private String STDN_NM;  
	private String ERR_YN;
	private String CRA_YN;
	private int TOT_SC;
	private int REG_MBR_NO;
	private int UPD_MBR_NO;
	private Date UPD_DTM;
	private Date LOAD_DTM;
	private int OMR_MST_CD;
	private String FREQ;
	private int QUEI_NUM;

	public int getOMR_KEY() {
		return OMR_KEY;
	}

	public void setOMR_KEY(int OMR_KEY) {
		this.OMR_KEY = OMR_KEY;
	}

	public int getQUEI_NO() {
		return QUEI_NO;
	}

	public void setQUEI_NO(int QUEI_NO) {
		this.QUEI_NO = QUEI_NO;
	}

	public int getLSN_CD() {
		return LSN_CD;
	}

	public void setLSN_CD(int LSN_CD) {
		this.LSN_CD = LSN_CD;
	}

	public int getLSN_SEQ() {
		return LSN_SEQ;
	}

	public void setLSN_SEQ(int LSN_SEQ) {
		this.LSN_SEQ = LSN_SEQ;
	}

	public int getCMPN_CD() {
		return CMPN_CD;
	}

	public void setCMPN_CD(int CMPN_CD) {
		this.CMPN_CD = CMPN_CD;
	}

	public int getBSTOR_CD() {
		return BSTOR_CD;
	}

	public void setBSTOR_CD(int BSTOR_CD) {
		this.BSTOR_CD = BSTOR_CD;
	}

	public String getEXMN_NO() {
		return EXMN_NO;
	}

	public void setEXMN_NO(String EXMN_NO) {
		this.EXMN_NO = EXMN_NO;
	}

	public String getSEX() {
		return SEX;
	}

	public void setSEX(String SEX) {
		this.SEX = SEX;
	}

	public String getBTHDAY() {
		return BTHDAY;
	}

	public void setBTHDAY(String BTHDAY) {
		this.BTHDAY = BTHDAY;
	}

	public String getOMR_IMG() {
		return OMR_IMG;
	}

	public void setOMR_IMG(String OMR_IMG) {
		this.OMR_IMG = OMR_IMG;
	}

	public String getMARK_NO() {
		return MARK_NO;
	}

	public void setMARK_NO(String MARK_NO) {
		this.MARK_NO = MARK_NO;
	}

	public String getSTDN_NM() {
		return STDN_NM;
	}

	public void setSTDN_NM(String STDN_NM) {
		this.STDN_NM = STDN_NM;
	}

	public String getERR_YN() {
		return ERR_YN;
	}

	public void setERR_YN(String ERR_YN) {
		this.ERR_YN = ERR_YN;
	}

	public String getCRA_YN() {
		return CRA_YN;
	}

	public void setCRA_YN(String CRA_YN) {
		this.CRA_YN = CRA_YN;
	}

	public int getTOT_SC() {
		return TOT_SC;
	}

	public void setTOT_SC(int TOT_SC) {
		this.TOT_SC = TOT_SC;
	}

	public int getREG_MBR_NO() {
		return REG_MBR_NO;
	}

	public void setREG_MBR_NO(int REG_MBR_NO) {
		this.REG_MBR_NO = REG_MBR_NO;
	}

	public int getUPD_MBR_NO() {
		return UPD_MBR_NO;
	}

	public void setUPD_MBR_NO(int UPD_MBR_NO) {
		this.UPD_MBR_NO = UPD_MBR_NO;
	}

	public Date getUPD_DTM() {
		return UPD_DTM;
	}

	public void setUPD_DTM(Date UPD_DTM) {
		this.UPD_DTM = UPD_DTM;
	}

	public Date getLOAD_DTM() {
		return LOAD_DTM;
	}

	public void setLOAD_DTM(Date LOAD_DTM) {
		this.LOAD_DTM = LOAD_DTM;
	}

	public int getOMR_MST_CD() {
		return OMR_MST_CD;
	}

	public void setOMR_MST_CD(int OMR_MST_CD) {
		this.OMR_MST_CD = OMR_MST_CD;
	}

	public String getFREQ() {
		return FREQ;
	}

	public void setFREQ(String FREQ) {
		this.FREQ = FREQ;
	}

	public int getQUEI_NUM() {
		return QUEI_NUM;
	}

	public void setQUEI_NUM(int QUEI_NUM) {
		this.QUEI_NUM = QUEI_NUM;
	}

	@Override
	public String toString() {
		return "OMR_GRDG{" +
				"OMR_KEY=" + OMR_KEY +
				", QUEI_NO=" + QUEI_NO +
				", LSN_CD=" + LSN_CD +
				", LSN_SEQ=" + LSN_SEQ +
				", CMPN_CD=" + CMPN_CD +
				", BSTOR_CD=" + BSTOR_CD +
				", EXMN_NO='" + EXMN_NO + '\'' +
				", SEX='" + SEX + '\'' +
				", BTHDAY='" + BTHDAY + '\'' +
				", OMR_IMG='" + OMR_IMG + '\'' +
				", MARK_NO='" + MARK_NO + '\'' +
				", STDN_NM='" + STDN_NM + '\'' +
				", ERR_YN='" + ERR_YN + '\'' +
				", CRA_YN='" + CRA_YN + '\'' +
				", TOT_SC=" + TOT_SC +
				", REG_MBR_NO=" + REG_MBR_NO +
				", UPD_MBR_NO=" + UPD_MBR_NO +
				", UPD_DTM=" + UPD_DTM +
				", LOAD_DTM=" + LOAD_DTM +
				", OMR_MST_CD=" + OMR_MST_CD +
				", FREQ='" + FREQ + '\'' +
				", QUEI_NUM=" + QUEI_NUM +
				'}';
	}
}
