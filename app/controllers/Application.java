package controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import models.CommandToDevice;
import models.Device;
import models.Location;
import models.MonitorData;
import models.Protege;
import models.SignalType;
import models.Warning;
import models.WarningType;

import com.avaje.ebean.Ebean;
import com.avaje.ebean.SqlRow;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import play.*;
import play.db.ebean.Model;
import play.mvc.*;
import play.mvc.Http.RequestBody;
import views.html.*;
import play.libs.Json;

public class Application extends Controller {

    public static Result index() {
    	Map<String,String> itWorks = new HashMap<String,String>();
    	Device device =  Ebean.find(Device.class ,1);
    	/*
    	Device device = new Device();
    	device.setMac("cushion");
    	Ebean.save(device); 
    	*/
    	
    	
        itWorks.put("message",device.getMac());
        return ok(play.libs.Json.toJson(itWorks));
    }
    public static Result protege_inf() {
    	
    	List<Protege> proList =  Ebean.find(Protege.class)
    			.select("name,age,monitoring_level")
    			.fetch("locations","roomNum,bedNum,device.id")
    			.where().eq("locations.endDate", null)
    			.findList();
    	
    	
    	List<Map<String,String>> resultMap = new ArrayList<Map<String, String>>(); 
    	
    	for(int i = 0; i < proList.size(); i++)
        {  
    		Protege pro = proList.get(i);
    		Map<String,String> itWorks = new HashMap<String,String>();
    		itWorks.put("id", pro.getId().toString());
    		itWorks.put("name", pro.getName());
    		itWorks.put("age", pro.getAge().toString());
    		itWorks.put("monitoring_level", pro.getMonitoring_level());
    		Location loc = pro.getLocations().get(0);
    		itWorks.put("roomNum", loc.getRoomNum());
    		itWorks.put("bedNum", loc.getBedNum());
    		itWorks.put("mac", loc.getDevice().getMac());
    		
    		resultMap.add(itWorks);
        }
    	ObjectNode result = Json.newObject();
    	result.put("data", play.libs.Json.toJson(resultMap));
    	
        return ok(play.libs.Json.toJson(result));
    }
    public static Result query(String type,Integer id) {
    	Map<String,String> returnMap = new HashMap<String,String>();
    	Logger.debug("query: "+type+" id: " + id.toString() );
    	if(type.equals("device"))
    	{
	    	try{
	    		List<Device> itemList;
	    		if(id==0)
	    			itemList =  Ebean.find(Device.class).
	    				findList();
	    		else
	    			itemList =  Ebean.find(Device.class)
					.where().eq("id", id).
					findList();
		    	for(int i = 0; i < itemList.size(); i++)  
		        {  
		    		returnMap.put(itemList.get(i).getId().toString(), itemList.get(i).toJSONString());
		        }
			}
			catch(NullPointerException e){
				}
    	}
    	else if(type.equals("protege"))
    	{
    		try{
	    		List<Protege> itemList;
	    		if(id==0)
	    			itemList =  Ebean.find(Protege.class).
	    				findList();
	    		else
	    			itemList =  Ebean.find(Protege.class)
					.where().eq("id", id).
					findList();
		    	for(int i = 0; i < itemList.size(); i++)  
		        {  
		    		returnMap.put(itemList.get(i).getId().toString(), itemList.get(i).toJSONString());
		        }
			}
			catch(NullPointerException e){
				}
    	}
    	else if(type.equals("signal_type"))
    	{
    		try{
	    		List<SignalType> itemList;
	    		if(id==0)
	    			itemList =  Ebean.find(SignalType.class).
	    				findList();
	    		else
	    			itemList =  Ebean.find(SignalType.class)
					.where().eq("id", id).
					findList();
		    	for(int i = 0; i < itemList.size(); i++)  
		        {  
		    		returnMap.put(itemList.get(i).getId().toString(), itemList.get(i).toJSONString());
		        }
			}
			catch(NullPointerException e){
				}
    	}
    	else if(type.equals("warning_type"))
    	{
    		try{
	    		List<WarningType> itemList;
	    		if(id==0)
	    			itemList =  Ebean.find(WarningType.class).
	    				findList();
	    		else
	    			itemList =  Ebean.find(WarningType.class)
					.where().eq("id", id).
					findList();
		    	for(int i = 0; i < itemList.size(); i++)  
		        {  
		    		returnMap.put(itemList.get(i).getId().toString(), itemList.get(i).toJSONString());
		        }
			}
			catch(NullPointerException e){
				}
    	}
    	else if(type.equals("monitor_data"))
    	{
    		try{
	    		List<MonitorData> itemList;
	    		if(id==0)
	    			itemList =  Ebean.find(MonitorData.class).
	    				findList();
	    		else
	    			itemList =  Ebean.find(MonitorData.class)
					.where().eq("id", id).
					findList();
		    	for(int i = 0; i < itemList.size(); i++)  
		        {  
		    		returnMap.put(itemList.get(i).getId().toString(), itemList.get(i).toJSONString());
		        }
			}
			catch(NullPointerException e){
				}
    	}
    	else if(type.equals("location"))
    	{
    		try{
	    		List<Location> itemList;
	    		if(id==0)
	    			itemList =  Ebean.find(Location.class).
	    				findList();
	    		else
	    			itemList =  Ebean.find(Location.class)
					.where().eq("id", id).
					findList();
		    	for(int i = 0; i < itemList.size(); i++)  
		        {  
		    		returnMap.put(itemList.get(i).getId().toString(), itemList.get(i).toJSONString());
		        }
			}
			catch(NullPointerException e){
				}
    	}
    	else if(type.equals("command"))
    	{
    		try{
	    		List<CommandToDevice> itemList;
	    		if(id==0)
	    			itemList =  Ebean.find(CommandToDevice.class).
	    				findList();
	    		else
	    			itemList =  Ebean.find(CommandToDevice.class)
					.where().eq("id", id).
					findList();
		    	for(int i = 0; i < itemList.size(); i++)  
		        {  
		    		returnMap.put(itemList.get(i).getId().toString(), itemList.get(i).toJSONString());
		        }
			}
			catch(NullPointerException e){
				}
    	}
    	else if(type.equals("warning"))
    	{
    		try{
	    		List<Warning> itemList;
	    		if(id==0)
	    			itemList =  Ebean.find(Warning.class).
	    				findList();
	    		else
	    			itemList =  Ebean.find(Warning.class)
					.where().eq("id", id).
					findList();
		    	for(int i = 0; i < itemList.size(); i++)  
		        {  
		    		returnMap.put(itemList.get(i).getId().toString(), itemList.get(i).toJSONString());
		        }
			}
			catch(NullPointerException e){
				}
    	}
        return ok(play.libs.Json.toJson(returnMap));
    }
    
    public static Result update(String type,Integer id) {
    	RequestBody body = request().body();
        return ok("Got json: " + body.asJson());
    }

}