import React from 'react';
import {buildYear, buildQuery} from './spotify';

test('buildYear to return a single year if years match', () => {
    expect(buildYear({from: 1994, to: 1994})).toBe(1994);
});
test('buildYear to return a single year if to is lower than from', () => {
    expect(buildYear({from: 1994, to: 1993})).toBe(1994);
});
test('buildYear to return a timeFrame if from is less than to', () => {
    expect(buildYear({from: 1994, to: 1995})).toBe('1994-1995');
});



test('buildQuery to return the correct simple query', () => {
    let formData = {
        query: "test",
        released: "all_time",
        genre: "",
        year: {
            from: 1994,
            to: 1994
        }
    }

    expect(buildQuery(formData)).toBe("test");
});
test('buildQuery to return the correct query with genre', () => {
    let formData = {
        query: "test",
        released: "all_time",
        genre: "rock",
        year: {
            from: 1994,
            to: 1994
        }
    }
    expect(buildQuery(formData)).toBe(`test genre:"rock"`);
});

test('buildQuery to return the correct query with latest releases', () => {
    let formData = {
        query: "test",
        released: "new_release",
        genre: "rock",
        year: {
            from: 1994,
            to: 1994
        }
    }
    expect(buildQuery(formData)).toBe(`test genre:"rock" tag:new`);
});

test('buildQuery to return the correct query with single year', () => {
    let formData = {
        query: "test",
        released: "year_range",
        genre: "rock",
        year: {
            from: 1994,
            to: 1994
        }
    }
    expect(buildQuery(formData)).toBe(`test genre:"rock" year:"1994"`);
});

test('buildQuery to return the correct query with year range', () => {
    let formData = {
        query: "test",
        released: "year_range",
        genre: "rock",
        year: {
            from: 1994,
            to: 1995
        }
    }
    expect(buildQuery(formData)).toBe(`test genre:"rock" year:"1994-1995"`);
});