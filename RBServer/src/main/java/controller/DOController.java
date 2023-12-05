package controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import logic.DOService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class DOController {
	@Autowired
	private DOService service;
	
	@RequestMapping("/do/student")
	public ResponseEntity<JSONObject> dropoutstudent(HttpServletRequest request, HttpServletResponse response, HttpSession session, @RequestBody String body ) throws JsonProcessingException {
		HttpHeaders responseHeaders = new HttpHeaders();

		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode node = objectMapper.readTree(body);

		String id = node.get("id").toString().replace("\"","");

		System.out.println("id : "+ id);
		Map<String,Object> list = new HashMap<>();
		list = service.getstudentchart(id);

//		System.out.println("LIST : " + list);

		JSONObject jsonObject = new JSONObject();
		JSONObject inner = new JSONObject();
		inner.put("result", list);
		jsonObject.put("list",inner);
		response.setContentType("text/plain;charset=UTF-8");
		return new ResponseEntity<>(jsonObject,responseHeaders, HttpStatus.CREATED);
	}

	@RequestMapping("/do/main")
	public ResponseEntity<JSONObject> dropoutmain(HttpServletRequest request, HttpServletResponse response, HttpSession session, @RequestBody String body ) throws JsonProcessingException {
		HttpHeaders responseHeaders = new HttpHeaders();

		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode node = objectMapper.readTree(body);
		if(body == null){
			System.out.println("nu");
		}
		Map<String,Object> list = new HashMap<>();
		list = service.getmainchart();
		JSONObject jsonObject = new JSONObject();
		JSONObject inner = new JSONObject();
		inner.put("result", list);
		jsonObject.put("list",inner);
		response.setContentType("text/plain;charset=UTF-8");
		return new ResponseEntity<>(jsonObject,responseHeaders, HttpStatus.CREATED);
	}

	@RequestMapping("/do/download")
	public ResponseEntity<JSONObject> dropoutdownload (HttpServletRequest request, HttpServletResponse response, HttpSession session, @RequestBody String body ) throws JsonProcessingException {
		HttpHeaders responseHeaders = new HttpHeaders();

		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode node = objectMapper.readTree(body);
		if(body == null){
			System.out.println("nu");
		}
		List<Map<String,Object>> list = new ArrayList<>();
		list = service.getdownloadchart();
		JSONObject jsonObject = new JSONObject();
		JSONObject inner = new JSONObject();
		inner.put("result", list);
		jsonObject.put("list",inner);
		response.setContentType("text/plain;charset=UTF-8");
		return new ResponseEntity<>(jsonObject,responseHeaders, HttpStatus.CREATED);
	}

}

