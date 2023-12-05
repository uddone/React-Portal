package config;

import java.util.Properties;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.http.converter.json.GsonHttpMessageConverter;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.HandlerMapping;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.handler.SimpleMappingExceptionResolver;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration	//자바 설정파일로 지정
@ComponentScan(basePackages= {"controller", "logic", "dao"})
//@EnableAspectJAutoProxy		//AOP 설정
@EnableWebMvc				//유효성검증을 위한 처리
public class MvcConfig implements WebMvcConfigurer {
	
	@Bean
	public HandlerMapping handlerMapping() {	// url 과 Controller를 매핑
		RequestMappingHandlerMapping hm = new RequestMappingHandlerMapping();
		hm.setOrder(0);
		return hm;
	}
	
	@Bean
	public ViewResolver viewResolver() {		// view 결정자
		InternalResourceViewResolver vr = new InternalResourceViewResolver();
		vr.setPrefix("/WEB-INF/view/");
		vr.setSuffix(".jsp");
		return vr;
	}
	
	@Bean
	public MessageSource messageSource() {		// properties 이름 설정
		ResourceBundleMessageSource ms = new ResourceBundleMessageSource();
		ms.setBasename("messages");
		return ms;
	}
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
				.allowedOrigins("*")
				.allowedOrigins("http://localhost:3000", "http://portal.aido.services")
				.allowedMethods("GET", "POST");
	}
	
	@Bean
	public MultipartResolver multipartResolver() {
		CommonsMultipartResolver mr = new CommonsMultipartResolver();
		return mr;
	}
	
	@Bean
	public SimpleMappingExceptionResolver exceptionHandler() {	//예외 객체 처리
		SimpleMappingExceptionResolver ser = new SimpleMappingExceptionResolver();
		Properties pr = new Properties();
		pr.put("exception.LoginException", "exception");
		ser.setExceptionMappings(pr);
		return ser;
	}

}