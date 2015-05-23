package models;

import java.util.List;

import javax.persistence.*;

import play.db.ebean.*;
import play.data.validation.*;

@Entity
@Table(name="warning_type")  
public class WarningType extends Model {
  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	Integer id;
	  
	@Constraints.Required
	String type;
	
	@Constraints.Required
	String measurement;
	
	@OneToMany(cascade=CascadeType.ALL,mappedBy="warningType")
	List<Warning> warns;
	
  
 	public Integer getId(){
	    return id;
	}
 	public void setId(Integer id){
	    this.id = id;
	}
 	public String getType(){
	    return type;
	}
 	public void setType(String type){
	    this.type = type;
	}
 	public String getMeasurement(){
	    return measurement;
	}
 	public void setMeasurement(String measurement){
	    this.measurement = measurement;
	}
 	public String toString()
 	{
 		return this.id.toString();
 	}

    public String toJSONString() {
	
    return "{ type:'"+type.toString()
+"',measurement:'"+measurement.toString()

    		+"' }";
    }

}