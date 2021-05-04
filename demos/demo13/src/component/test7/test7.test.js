import { act as domAct } from "react-dom/test-utils";
import { act as testAct, create } from "react-test-renderer";
import Test7 from './test7'

let root;

it('test7', () => {

    domAct(() => {
        testAct(() => {
            root = create(<Test7 />);
        });
    });
    expect(root).toMatchSnapshot();

});

