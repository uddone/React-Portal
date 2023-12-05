import React from 'react';
import { Row, Card,CardBody,CardTitle,Button} from 'reactstrap';
import { Colxx} from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import Cakes from 'containers/dashboards/Cakesdkt';

const DKT_STDLIST = () => {
  return (
    <div>
		<Row>
			<Colxx md="12" className="mb-4">
				<Card>
				  <CardBody>
					<CardTitle style={{
						"font-weight":"bold"
					  }}>
					  <IntlMessages id="학년별 학생 리스트" />
					</CardTitle>
					<div style={{
						"float":"left"
					  }}>
						<Button color="secondary" className="mb-2">
						  <IntlMessages id="1학년" />
						</Button>{' '}
						<Button color="secondary" className="mb-2">
						  <IntlMessages id="2학년" />
						</Button>{' '}
						<Button color="secondary" className="mb-2">
						  <IntlMessages id="3학년" />
						</Button>{' '}
					</div>
				  </CardBody>
				</Card>
			</Colxx>
		</Row>	
		<Row>
			<Colxx xxs="12" className="mb-4">
				<Cakes/>           
			</Colxx>
		</Row>
    </div> 
  );
};

export default DKT_STDLIST;
