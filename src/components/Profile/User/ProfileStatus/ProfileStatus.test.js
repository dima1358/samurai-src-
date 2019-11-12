import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('New status should be in state', () => {
        let component = create(<ProfileStatus statusText={'test status'}/>)
        let instance = component.getInstance();
        expect(instance.state.statusText).toBe('test status')
    })
    test('after creation p should be displayed', () => {
        let component = create(<ProfileStatus statusText={'test status'}/>)
        let root = component.root
        let p = root.findByType('p')
        expect(p).not.toBeNull()
    })
    test('after creation input should not be displayed', () => {
        let component = create(<ProfileStatus statusText={'test status'}/>)
        let root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })
    test('after creation p should be displayed with correct status', () => {
        let component = create(<ProfileStatus statusText={'test status'}/>)
        let root = component.root
        let p = root.findByType('p')
        expect(p.children[0]).toBe('test status')
    })
})
